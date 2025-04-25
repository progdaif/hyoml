from formatters.json import JSON
from formatters.yaml import YAML
from formatters.env import ENV
from formatters.ini import INI
from formatters.toml import TOML
from formatters.csv import CSV
from formatters.xml import XML
from formatters.markdown import Markdown
from formatters.html import HTML
from formatters.strictyml import StrictYML

class FormatterFactory:
    """
    Provides formatter instances by type.
    """

    formatters = {
        "json": JSON,
        "yaml": YAML,
        "env": ENV,
        "ini": INI,
        "toml": TOML,
        "csv": CSV,
        "xml": XML,
        "markdown": Markdown,
        "html": HTML,
        "strictyml": StrictYML
    }

    @staticmethod
    def create(format_type):
        """
        Returns a formatter class by name (e.g., 'json', 'yaml').

        Args:
            format_type (str): Name of the format

        Returns:
            class: Formatter class
        """
        return FormatterFactory.formatters.get(format_type.lower())
