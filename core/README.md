# @one-format/core

The core package provides the adapter used to expose a one-format plugin's
metadata and tools.

## Installation

```bash
npm install @one-format/core
```

## Usage

Pass a plugin object to the default adapter. The adapter preserves the
plugin's tools and adds helpers for inspecting the plugin:

```ts
import adapter from "@one-format/core";

const plugin = adapter({
  metadata: {
    name: "Example plugin",
    author: "Example author",
    version: "1.0.0",
  },
  tools: {
    uppercase: (value: string) => value.toUpperCase(),
  },
});

plugin.uppercase("hello"); // "HELLO"
plugin.getMetadata(); // { name: "Example plugin", author: "Example author", version: "1.0.0" }
plugin.getToolNames(); // ["uppercase"]
plugin.hasTool("uppercase"); // true
```

### Plugin shape

A plugin contains `metadata` and a `tools` object. Each tool is a function
whose input and output types are defined by the plugin's TypeScript types:

```ts
const plugin = {
  metadata: {
    name: "Greeting plugin",
    author: "Example author",
  },
  tools: {
    greet: (name: string) => `Hello, ${name}!`,
  },
};
```

The adapter returns all plugin tools along with:

- `getMetadata()` - returns the plugin metadata.
- `getToolNames()` - returns the names of all tools.
- `hasTool(name)` - checks whether a tool exists.

## License

EUPL-1.2
