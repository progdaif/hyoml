
# Setup & Installation

## Requirements
- Python 3.6+
- No external dependencies required

## Installation (Python)
```bash
git clone https://github.com/ahmeddaif22/hyoml
cd hyoml
pip install -e python/
```

## CLI Usage
```bash
hyoml parse input.hyoml --format json --output output.json
```

## Project Structure Awareness
- All parsing and formatting logic is under `python/`
- Language-specific directories will be added in the future (e.g., `javascript/`)

---

# Contribution Guide

We welcome contributions to Hyoml!

## How to Contribute
1. Fork the repository
2. Create a feature branch
3. Add tests for your feature or bug fix
4. Submit a pull request with a clear description

## Coding Style
- Use clear docstrings and type hints
- Include error handling
- Follow the structure under `python/` and extend as needed

## Future Plans
- Support for additional languages like TypeScript/Go
- Support for semantic output formats (JSON-LD, RDF)

## Communication
If you have questions, open an issue or start a discussion.
