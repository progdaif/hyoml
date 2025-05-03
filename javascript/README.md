# Hyoml-JS

Hyoml JavaScript Parser and Formatter.  
Supports relaxed JSON, YAML, Hyoml, and multi-format output.

## Features
- Relaxed JSON parsing (auto-fix common mistakes)
- Relaxed YML/Hyoml parsing
- Strict Mode validation
- Tag and Directive visiting
- Output formatting to JSON, YAML, TOML, XML, ENV, Markdown, HTML, SQL, Dot notation, and more
- Load input from Local Files, HTTP URLs, AWS S3, GCS, Azure Blob
- CLI Tools (`parse`, `format`, `validate`, `transform`, `info`)

## Install
```bash
npm install hyoml-js
```

## Usage
```js
const { HyomlParser } = require('hyoml-js')
const parsed = HyomlParser.parse('{ name: "hyoml" }')
console.log(parsed)
```

## CLI Usage
```bash
node src/cli/main.js parse examples/sample_input.hyoml
```

## License
MIT © Ahmed Daif
