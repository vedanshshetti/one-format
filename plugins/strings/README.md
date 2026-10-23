# @one-format/strings-plugin

An official one-format plugin for common string transformations.

## Installation

```bash
npm install @one-format/strings-plugin
```

## Usage

The package exports a plugin object containing three tools:

```ts
import stringsPlugin from "@one-format/strings-plugin";

stringsPlugin.tools.uppercase("hello, world!");
// "HELLO, WORLD!"

stringsPlugin.tools.lowercase("Hello, World!");
// "hello, world!"

stringsPlugin.tools.urlencoded("hello world!");
// "hello%20world!"
```

Use the plugin with `@one-format/core` to expose its tools directly:

```ts
import adapter from "@one-format/core";
import stringsPlugin from "@one-format/strings-plugin";

const strings = adapter(stringsPlugin);

strings.uppercase("hello"); // "HELLO"
strings.lowercase("HELLO"); // "hello"
strings.urlencoded("hello world"); // "hello%20world"
```

## API

- `tools.uppercase(value)` - returns the string converted to uppercase.
- `tools.lowercase(value)` - returns the string converted to lowercase.
- `tools.urlencoded(value)` - returns the string encoded with
  `encodeURIComponent`.
- `metadata` - identifies the plugin and its version.

All tools accept a string and return a string.

## License

EUPL-1.2
