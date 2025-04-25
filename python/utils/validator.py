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

class Validator:
    """
    Centralized validator for all supported Hyoml output formats.
    """

    @staticmethod
    def isValidJSON(data):
        return JSON.validate(data)

    @staticmethod
    def isValidYAML(data):
        return YAML.validate(data)

    @staticmethod
    def isValidENV(data):
        return ENV.validate(data)

    @staticmethod
    def isValidINI(data):
        return INI.validate(data)

    @staticmethod
    def isValidTOML(data):
        return TOML.validate(data)

    @staticmethod
    def isValidCSV(data):
        return CSV.validate(data)

    @staticmethod
    def isValidXML(data):
        return XML.validate(data)

    @staticmethod
    def isValidMarkdown(data):
        return Markdown.validate(data)

    @staticmethod
    def isValidHTML(data):
        return HTML.validate(data)

    @staticmethod
    def isValidStrictYML(data):
        return StrictYML.validate(data)

# ✅ Tuple/dict-compatible handling already covered by native checks.