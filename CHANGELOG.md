# Changelog

## [0.3.0] - JavaScript Version - 2025-05-03

### Added
- Full feature parity with Python implementation
- CLI commands: parse, format, validate
- Readers: JSON, YAML, ENV, INI, XML, etc.
- Loaders: File, HTTP, S3, GCS, Azure
- Output formatters: JSON, YAML, TOML, XML, HTML, Markdown, SQL, etc.
- Tag and Directive Visitors
- Reviver hook support
- AutoFixer middleware
- Examples and tests using Jest
- Clean code style (no semicolons, docstrings everywhere)

### Fixed
- All previous logic errors and unwrapped exceptions
- CommonJS export consistency

## [0.0.2] - 2025-04-27
### Python

### Added
- **Cloud Storage Upload**: Users can now pass their own cloud storage agents for file uploads (AWS, GCP, Azure).
- **Multithreading and Multiprocessing**: Full support for **large file processing** and **streaming** using multithreading and multiprocessing.
- **Strict Mode Enhancements**: Enhanced strict parsing for stricter format compliance.
- **Cloud Storage Upload**: Introduced the ability for users to pass their own cloud storage agents (AWS, GCP, Azure) for file uploads, eliminating the need for cloud-specific SDKs in the project.
- Added **multithreading** and **multiprocessing** support for **heavy workload handling** and **large file processing**.
- **Strict Mode Detection**: Enhanced **strict mode** feature for better compliance with JSON/YAML formatting rules.
- **Resource Loader**: Integrated `LoaderManager` for handling multiple resource types, improving flexibility for input formats.

### Fixed
- **Cloud Storage Upload**: Fixed issues with incorrect cloud storage path detection.
- **Strict Mode**: Fixed issues with certain malformed files in strict mode.
- **Strict Mode Parsing**: Fixed issues with strict parsing rules not being applied correctly in relaxed formats.
- **Cloud Upload Bug**: Resolved bugs related to cloud storage uploads where incorrect paths or agents were passed.

### Changed
- **Refactored Cloud Integration**: Removed hard dependencies for cloud SDKs (`boto3`, `google-cloud-storage`, `azure-storage`), now relying on user-provided cloud storage agents.
- **Improved File Handling**: Simplified file and URI upload logic to handle multiple upload scenarios dynamically.
- **Cloud Integration**: Refactored cloud storage integration to accept **user-defined cloud agents** rather than direct dependencies like `boto3`, `google-cloud-storage`, or `azure-storage`.
- **Hyoml Interface**: Simplified the cloud upload process with **better flexibility** for users.
- **Parsing Strategies**: Optimized parsing strategy switching between `RelaxedJSON` and `RelaxedYML`.

## [0.0.1] - 2025-04-01
### Added
- Initial release of **Hyoml** with basic parsing and formatting support for **relaxed JSON** and **YAML** formats.
- Initial functionality for **tags** and **directives** processing within hybrid files.

### Fixed
- Initial bugs with strict mode detection and parsing errors in malformed files.
