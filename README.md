
# Hyoml

Hyoml is a human-like intelligent data format/handler system. Designed to detect, understand and fix compatibility issues. It supports safe fault-tolerant parsing, JSON/YAML/tag/directive processing and output to multiple formats including XML, SQL, Markdown, RSS, up to 23+ formats. It can handle all formats even if mixed together in one string!

It can seamlessly work as a bridge to handle/convert **23+ supported formats** like CSV, OWL, HTML and more. Hyoml empowers you with **near-zero learning curve** and flawless compatibility with modern and  **legacy systems**. It simplifies your integration by intelligently fixing files and formats compatibility issues.

**Hyoml** is **fault-tolerant** yet **safe**, with a comprehensive **unit testing suite** that covers even the **edge cases**. The intelligent universal format of the future that works in **cloud environments** like **GCP**, **AWS**, and **Azure** is now available.


## Key Features

- 🧠 **Intelligent parsing and conversion**: Handles multiple formats (JSON, YAML, TOML, SQL, etc.) with **near-zero errors**.
- 🌍 **Cloud support**: Works seamlessly with **Google Cloud**, **AWS**, and **Azure** for efficient processing of cloud-based files.
- ⚡ **Zero learning curve**: Designed to work **perfectly with legacy systems** with no complicated setup.
- 🔄 **Fault-tolerant, but safe**: Handles data conversion errors gracefully and ensures safe processing.
- 🔧 **Unit tested**: Comprehensive **unit tests** with a focus on edge cases, making it reliable for large datasets and varied input types.
- 💼 **Fully extendable**: All aspects of Hyoml are **extensible** with easy control over parsing, formatting, and validation.
- ⚙️ **Multithreading and multiprocessing support**: Handles **large files**, **streams**, and **heavy workloads** effortlessly.
- 🚀 **Semantic files support**: Handles **native data structures** like **Python tuples** and can process **semantic data formats**.


## Getting Started

Install locally for development:

```bash
git clone https://github.com/ahmeddaif22/hyoml
cd hyoml
pip install -e python/
```

## CLI Example
Hyoml allows you to parse and format files with the following command:

```bash
hyoml parse input.hyoml --format json --output output.json
```
## Python Example

from hyoml import Hyoml

# Initialize Hyoml
hyoml = Hyoml()

# Parse Hyoml content
parsed_data = hyoml.parse(text="your mixed xml,rss,yaml, json content goes here")
# you can pass it a path, link, string or even cloud link. Whatever you pass is understood.

# Format output to JSON for example
formatted_json = hyoml.format(parsed_data, "json")
# instead of json you can pass one of 23 formats
# formatted_json can be uploaded or saved as a file using the same statement

# Convert data to native data structures like: dict, list, or tuple
data_dict = hyoml.toDict(parsed_data)
data_list = hyoml.toList(parsed_data)
data_tuple = hyoml.toTuple(parsed_data)


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

MIT License – Free and open-source.

## Contributing

See [docs/contribution_guide.md](docs/contribution_guide.md) for how to contribute.
