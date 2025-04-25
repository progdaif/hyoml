from parser.core.hyoml_parser import HyomlParser
from parser.core.factory import FormatterFactory
from utils.validator import Validator
from parser.core.manipulation.sorter import DataSorter
from parser.core.manipulation.searcher import DataSearcher


class Hyoml:
    """
    Unified interface for parsing, validating, and formatting Hyoml content.
    Supports text, file-like objects, and file paths.
    """

    def __init__(self, options=None):
        self.options = options or {}
        self.parser = HyomlParser(options=self.options)
        # Extendable: tuple/dataclass parsing options

    def parse(self, text=None, path=None):
        try:
            if path:
                with open(path, 'r', encoding='utf-8') as f:
                    text = f.read()
            elif hasattr(text, 'read'):
                text = text.read()
            elif not isinstance(text, str):
                raise ValueError("Input must be a string, file-like object, or file path.")
            return self.parser.parse(text)
        except Exception as e:
            raise ValueError(f"[Hyoml.parse] Failed to parse input: {e}")

    # Aliases for parse
    load = loads = decode = deserialize = read = parse

    def format(self, data, fmt, path=None, **opts):
        formatter = FormatterFactory.create(fmt)
        if not formatter:
            raise ValueError(f"[Hyoml.format] Unknown formatter type: {fmt}")
        output = formatter.format(data, **opts)

        if path:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(output)

        return output

    # Aliases for format
    stringify = dump = dumps = show = encode = serialize = output = format

    def validate(self, data, fmt):
        method = f"isValid{fmt.capitalize()}"
        if not hasattr(Validator, method):
            raise ValueError(f"[Hyoml.validate] No validator found for format: {fmt}")
        return getattr(Validator, method)(data)

    def sort(self, data, by="key", reverse=False, list_key=None):
        """
        Sort Hyoml data after parsing.

        Args:
            data (dict or list): Parsed data
            by (str): 'key', 'value', or key name if sorting list of dicts
            reverse (bool): Reverse sort
            list_key (str): Required if sorting list of dicts

        Returns:
            Sorted structure
        """
        try:
            if isinstance(data, dict):
                if by == "key":
                    return DataSorter.sort_dict_by_keys(data, reverse)
                elif by == "value":
                    return DataSorter.sort_dict_by_values(data, reverse)
                else:
                    raise ValueError("Invalid sort 'by' for dict")
            elif isinstance(data, list) and list_key:
                return DataSorter.sort_list_of_dicts(data, list_key, reverse)
            else:
                raise ValueError("Unsupported sort format or missing list_key")
        except Exception as e:
            raise ValueError(f"[Hyoml.sort] Failed: {e}")

    def search(self, data, key=None, value=None):
        """
        Search for a key or value in a parsed structure.

        Args:
            data (dict): Parsed data
            key (str): Key to find
            value: Value to match

        Returns:
            list: Results
        """
        try:
            if key:
                return DataSearcher.find_key(data, key)
            elif value is not None:
                return DataSearcher.find_value(data, value)
            else:
                raise ValueError("Specify key or value to search")
        except Exception as e:
            raise ValueError(f"[Hyoml.search] Failed: {e}")
        
    # Individual format helpers
    def asJSON(self, data, path=None, **opts): return self.format(data, "json", path=path, **opts)
    def asYAML(self, data, path=None, **opts): return self.format(data, "yaml", path=path, **opts)
    def asTOML(self, data, path=None, **opts): return self.format(data, "toml", path=path, **opts)
    def asINI(self, data, path=None, **opts): return self.format(data, "ini", path=path, **opts)
    def asENV(self, data, path=None, **opts): return self.format(data, "env", path=path, **opts)
    def asCSV(self, data, path=None, **opts): return self.format(data, "csv", path=path, **opts)
    def asXML(self, data, path=None, **opts): return self.format(data, "xml", path=path, **opts)
    def asMarkdown(self, data, path=None, **opts): return self.format(data, "markdown", path=path, **opts)
    def asHTML(self, data, path=None, **opts): return self.format(data, "html", path=path, **opts)
    def asStrictYML(self, data, path=None, **opts): return self.format(data, "strictyml", path=path, **opts)

    # String output aliases
    def toTXT(self, data, path=None, **opts): return self.format(data, "txt", path=path, **opts)
    asString = toString = toTXT

    # Format validators
    def isValidJSON(self, data): return Validator.isValidJSON(data)
    def isValidYAML(self, data): return Validator.isValidYAML(data)
    def isValidENV(self, data): return Validator.isValidENV(data)
    def isValidINI(self, data): return Validator.isValidINI(data)
    def isValidTOML(self, data): return Validator.isValidTOML(data)
    def isValidCSV(self, data): return Validator.isValidCSV(data)
    def isValidXML(self, data): return Validator.isValidXML(data)
    def isValidMarkdown(self, data): return Validator.isValidMarkdown(data)
    def isValidHTML(self, data): return Validator.isValidHTML(data)
    def isValidStrictYML(self, data): return Validator.isValidStrictYML(data)
