# 📚 Hyoml Glossary

Key terms and concepts you need to understand when working with Hyoml.

---

## Relaxed Parsing
A flexible parsing mode that allows missing commas, flexible quoting, and indentation-based block structure similar to YAML.

## Strict Mode
A mode that enforces traditional JSON/YAML syntax rules strictly (quotes, commas, indentation) — for validation use cases.

## Hyoml
Short for "Hybrid Object Markup Language" — combining the best of relaxed JSON and readable YAML.

## Tag Visitor
A middleware component that traverses the parsed structure to identify and handle special tags like `@type`, `@unit`, etc.

## Directive Visitor
Middleware for parsing, interpreting, or transforming inline directives that control parsing behavior.

## Loader
A component that fetches data from different sources (local files, HTTP URLs, cloud storage like S3, GCS, Azure).

## Formatter
A module that outputs parsed data into different target formats (JSON, YAML, XML, CSV, RDF, etc.).

## AutoFixer
A preprocessing step that automatically fixes minor typos, structure errors, and formatting inconsistencies before parsing.
