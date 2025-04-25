
# Hyoml

Hyoml is a flexible and extensible parser/formatter system for relaxed JSON and YAML. It supports fault-tolerant parsing, tag/directive processing, and output to multiple formats including JSON, YAML, TOML, XML, SQL, Markdown, and more.

## Features

- 🔄 Parses relaxed JSON and YAML with auto-fix capabilities
- 🏷️ Supports `@tags` and `%directives` with pluggable middleware
- 🧰 Outputs to multiple structured formats
- 🧪 Includes testing and validation utilities
- ⚙️ Comes with a CLI and a programmatic Python interface
- 🔜 Designed for multi-language support (e.g., JS/Go in future)

## Getting Started

Install locally for development:

```bash
git clone https://github.com/ahmeddaif22/hyoml
cd hyoml
pip install -e python/
```

## CLI Example

```bash
hyoml parse input.hyoml --format json --output output.json
```

## Project Layout

- `python/core/` – Parsers, config, and autofixer logic
- `python/formats/` – Output formatters
- `python/middleware/` – Tag and directive processors
- `python/utils/` – File, logging, and validation helpers
- `python/interface/` – CLI and public Python API
- `python/tests/` – Unit tests
- `examples/` – Input/output demonstrations
- `docs/` – Architecture and setup documentation

## License

MIT License

## Contributing

See [docs/contribution_guide.md](docs/contribution_guide.md) for how to contribute.
