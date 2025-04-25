from parser.core.middleware.autofixer import AutoFixer
from parser.core.middleware.reviver import Reviver

from parser.core.visitors.date_visitor import DateVisitor
from parser.core.visitors.tag_visitor import TagVisitor
from parser.core.visitors.directive_visitor import DirectiveVisitor
from parser.core.visitors.visitor_loader import VisitorPipeline

from parser.core.RelaxedJSON_with_tags import RelaxedJSON
from parser.core.RelaxedYML_with_tags import RelaxedYML



class HyomlParser:
    """
    Main orchestrator that handles RelaxedJSON, RelaxedYML parsing, tag/directive extraction,
    smart type casting, and configurable visitor pipelines.
    """

    def __init__(self, options: dict = None):
        """
        Args:
            options (dict): Parser behavior and transformation options. Supports:
                - reviver (callable): Post-parse transformation for primitive values
                - tag_key (str): Destination key for tags (default: "_tags")
                - directive_key (str): Destination key for directives (default: "_directives")
                - merge_tags (bool): Store tags/directives together in one key
                - visitors (list[str]): List of visitor class paths to apply in order
        """
        self.options = options or {}

        self.json = RelaxedJSON(
            tag_key=self.options.get("tag_key", "_tags"),
            directive_key=self.options.get("directive_key", "_directives"),
            merge_tags=self.options.get("merge_tags", False)
        )

        self.yml = RelaxedYML(
            tag_key=self.options.get("tag_key", "_tags"),
            directive_key=self.options.get("directive_key", "_directives"),
            merge_tags=self.options.get("merge_tags", False)
        )

    def parse(self, text: str) -> dict:
        """
        Parses Hyoml text and returns structured data.

        Applies:
        - Autofix and typo correction
        - Format detection (JSON vs YML)
        - Built-in visitors (tag/date/directive)
        - Optional custom visitor pipeline
        - Optional reviver transformation

        Args:
            text (str): Hyoml input text

        Returns:
            dict: Fully parsed and transformed data
        """
        try:
            if 'strict' not in self.options:
                if self._detect_strict_mode(text):
                    self.options['strict'] = True
            log_autofix = self.options.get("log_autofix", False)
            fixed = AutoFixer.apply(text, level="smart", log_fixes=log_autofix)
            raw = self._parse_core(fixed)

            # Built-in + pipeline visitors
            visited = VisitorPipeline.apply(
                DirectiveVisitor.visit(
                    TagVisitor.visit(
                        DateVisitor.visit(raw)
                    )
                ),
                self.options.get("visitors")
            )

            # Apply custom reviver if present
            return Reviver.apply(visited, self.options.get("reviver"), self.options)

        except Exception as e:
            raise ValueError(f"[HyomlParser] Parse failed: {e}")

    def _detect_strict_mode(self, text: str) -> bool:
        """
        Detects if strict mode is requested inside the Hyoml input.
        Searches the first few lines for strict indicators.
        """
        strict_keywords = [
            "use strict", "strict", "strict-mode", "restricted", "restrictions",
            "enforce", "enforced", "lock", "locked", "mode=locked", "secure",
            "harden", "hardening"
        ]
        lines = text.strip().splitlines()[:5]
        for line in lines:
            normalized = line.strip().strip("'\"<>").lower()
            for keyword in strict_keywords:
                if keyword in normalized:
                    return True
        return False

    def _parse_core(self, text: str) -> dict:
        """
        Detect and delegate parsing to RelaxedJSON or RelaxedYML.

        Args:
            text (str): Cleaned source input

        Returns:
            dict: Parsed result
        """
        return self.json.parse(text) if "{" in text else self.yml.parse(text)

    def is_strict(self, rule: str) -> bool:
        """
        Determine if a given strict rule is active.

        Args:
            rule (str): Name of the rule (e.g., "quotes-required")

        Returns:
            bool: True if the rule is strictly enforced
        """
        value = self.options.get(rule)
        return value is True or value == "error"

