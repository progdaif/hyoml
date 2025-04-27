# 🚀 Getting Started with Hyoml

Welcome to Hyoml, an intelligent parser and formatter that understands relaxed JSON/YAML-like structures easily.

This quick guide will help you learn how to load, validate, manipulate, and format Hyoml data.

---

## 📦 1. Installation

First, make sure you have Python 3.8+ installed.

Install Hyoml (if available) or clone your repository.

Example (assuming you have a local version):

```bash
pip install -e .
```

---

## 📄 2. Load Your First Hyoml

You can parse a simple Hyoml text directly:

```python
from python.interface.hyoml import Hyoml

example = '''
name: Alice
age: 30
country: Wonderland
'''

h = Hyoml()
parsed = h.parse(example)
print(parsed)
```

---

## ✅ 3. Validate Parsed Data

You can validate whether your parsed structure is correct:

```python
if h.validate(parsed):
    print("Valid structure!")
else:
    print("Invalid data!")
```

---

## 🔄 4. Convert Between Formats

Convert your Hyoml into JSON, YAML, or even strict Hyoml:

```python
print(h.format(parsed, format="json"))
print(h.format(parsed, format="yaml"))
print(h.format(parsed, format="hyoml"))
```

---

## 🔥 5. Strict vs Relaxed Parsing Modes

You can parse data strictly (like standard JSON/YAML) or in relaxed Hyoml mode:

```python
h_strict = Hyoml(strict=True)
parsed_strict = h_strict.parse('name: Alice\nage: 30')
```

Relaxed mode allows omitted quotes, flexible syntax, etc.

---

## 📂 6. Work With Files and Cloud

Load Hyoml data from a local file:

```python
parsed = h.parse_from_file("examples/data/sample.json")
```

Or load from cloud content (after downloading string from cloud storage).

---

## 🧠 7. Advanced Topics

- Revive complex types (tuples, dataclasses)
- Search, sort, manipulate parsed Hyoml structures
- Validate strict formats
- Handle tags, directives, custom visitors

Explore all examples in `examples/` to dive deeper!

---

## 🏁 8. Where To Go Next

- See `examples/basic_usage.py` for quick intro.
- See `examples/advanced_cases.py` to learn complex structures.
- See `examples/validate_input.py` to learn how to validate inputs.
- See `examples/convert_between_formats.py` to learn format conversion.

Happy parsing! 🎯

---
