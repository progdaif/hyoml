
# Hyoml Architecture

## High-Level Structure

```
hyoml/
└── python/
    ├── core/                    # Parsers and config
    │   ├── __init__.py
    │   ├── hyoml_parser.py
    │   ├── relaxed_json.py
    │   ├── relaxed_yml.py
    │   ├── auto_fixer.py
    │   └── config.py
    │
    ├── formats/                 # Formatters for different output types
    │   ├── __init__.py
    │   ├── base_formatter.py
    │   ├── json_formatter.py
    │   ├── yml_formatter.py
    │   ├── toml_formatter.py
    │   ├── xml_formatter.py
    │   ├── markdown_formatter.py
    │   ├── env_formatter.py
    │   ├── txt_formatter.py
    │   ├── shell_formatter.py
    │   ├── sql_formatter.py
    │   ├── dbunit_formatter.py
    │   ├── csv_formatter.py
    │   ├── html_formatter.py
    │   ├── ini_formatter.py
    │   └── properties_formatter.py
    │
    ├── middleware/              # Directive and tag processors (visitors)
    │   ├── __init__.py
    │   ├── tag_visitor.py
    │   └── directive_visitor.py
    │
    ├── utils/                   # Supporting utilities
    │   ├── __init__.py
    │   ├── formatter_utils.py
    │   ├── file_utils.py
    │   ├── validator.py
    │   └── logger.py
    │
    └── interface/               # CLI and programmatic interface
        ├── __init__.py
        ├── hyoml.py
        └── cli.py
```

## Design Goals
- Modular parsing pipeline with plug-and-play middleware
- Consistent interface across languages (Python, future JS/Go)
- Extensibility to new formats and output targets

## Flow
1. Input is parsed using `HyomlParser` (from `core/hyoml_parser.py`)
2. AutoFixer and middleware (`tag_visitor.py`, `directive_visitor.py`) apply transformations
3. Data is formatted via the selected formatter module in `formats/`
4. The `Hyoml` class in `interface/hyoml.py` provides both CLI and programmatic access
