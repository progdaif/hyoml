# Hyoml Examples

This folder contains examples demonstrating how to use the Hyoml parser and formatter in different scenarios.

## 📂 Structure

- `data/` - Sample input files (`.hyoml`, `.json`, `.yml`) used by the examples.
- Python example scripts demonstrating parsing, formatting, validation, loading, strict/relaxed modes.

## 📚 Examples

| Example File | Description |
|:-------------|:------------|
| `basic_usage.py` | Basic parsing and formatting of Hyoml input |
| `advanced_cases.py` | Parsing advanced Hyoml structures (arrays, nested objects) |
| `advanced_formatting.py` | Formatting Hyoml into multiple output formats |
| `all_formatters.py` | Using all available formatters (JSON, YAML, XML, etc.) |
| `edge_cases_and_tags.py` | Parsing Hyoml with special cases, tags, directives |
| `from_file_io.py` | Loading Hyoml data from files |
| `load_convert_formats.py` | Converting Hyoml to other formats |
| `manipulation_example.py` | Searching, sorting, manipulating Hyoml structures |
| `parse_from_string.py` | Parsing Hyoml content directly from strings |
| `validate_input.py` | Validating parsed Hyoml input |
| `convert_between_formats.py` | Converting between JSON, YAML, and Hyoml formats |
| `strict_vs_relaxed_demo.py` | Comparing strict and relaxed parsing modes |
| `load_from_cloud.py` | Simulated loading Hyoml content from cloud sources |
| `parse_tuples_and_dataclass.py` | Handling tuples and dataclass parsing |
| `revive_with_typing.py` | Reviving structures with typing hints |
| `trigger_strict_from_file.py` | Triggering strict parsing from external input |
| `validate_each_format.py` | Validating output formats individually |

## 🚀 How to Run

You can run any example like this:

```bash
python3 examples/<example_file>.py
```

Example:

```bash
python3 examples/basic_usage.py
```

Make sure you have installed the Hyoml package and its dependencies first.

---

Happy Parsing! 🎯
