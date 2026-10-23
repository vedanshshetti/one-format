# @one-format/http-plugin

An official one-format plugin for formatting standard HTTP status codes.

## Installation

```bash
npm install @one-format/http-plugin
```

## Usage

The package exports a plugin object containing two tools:

```ts
import httpPlugin from "@one-format/http-plugin";

httpPlugin.tools.codeToMessage(404);
// "Not Found"

httpPlugin.tools.codeToFormal(404);
// "HTTP/404 Not Found"
```

Use the plugin with `@one-format/core` to expose its tools directly:

```ts
import adapter from "@one-format/core";
import httpPlugin from "@one-format/http-plugin";

const http = adapter(httpPlugin);

http.codeToMessage(500); // "Internal Server Error"
http.codeToFormal(201); // "HTTP/201 Created"
```

### Supported status codes

The `HttpStatusCode` type covers the standard HTTP status codes in the
informational (1xx), success (2xx), redirection (3xx), client error (4xx),
and server error (5xx) ranges, including WebDAV and other registered codes.
TypeScript will restrict tool inputs to the supported codes.

### API

- `tools.codeToMessage(code)` - returns the reason phrase for a status code.
- `tools.codeToFormal(code)` - returns a formatted `HTTP/<code> <message>`
  status line.
- `metadata` - identifies the plugin and its version.

## License

EUPL-1.2
