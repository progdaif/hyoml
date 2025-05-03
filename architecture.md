# 🧠 Hyoml Architecture (Python & JavaScript)

## Core Concepts

| Component     | Python           | JavaScript       |
|---------------|------------------|------------------|
| Parser        | `relaxedJSONParser.py` | `relaxedJSONParser.js` |
| Middleware    | `autoFixer.py`, `validator.py` | Same in JS |
| Visitors      | `tagVisitor.py`, `directiveVisitor.py` | Same in JS |
| Loaders       | Python: `file_loader.py`, `s3_loader.py` | JS: `fileLoader.js`, `s3Loader.js` |
| Formatters    | Output to JSON, YAML, XML, etc. | Full parity in JS |
| Interface     | `hyoml.py`       | `index.js`       |

## Design Patterns

- Factory Pattern
- Strategy Pattern
- Visitor Pattern

Both implementations follow these patterns to maintain feature parity.
