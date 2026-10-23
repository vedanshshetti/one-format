type PluginFn<Input = any, Output = any> = (input: Input) => Output;

interface PluginMetadata {
    name: string; // Plugin Name
    author: string; // Author
    version?: string; // Version Number, preferably SemVer.
}
interface PluginType<Tools extends Record<string, any>> {
    metadata: PluginMetadata;
    tools: {
        [K in keyof Tools]: PluginFn<Tools[K]['input'], Tools[K]['output']>;
    };
}


const stringsPlugin: PluginType<{
    uppercase: {
        input: string,
        output: string
    },
    lowercase: {
        input: string,
        output: string
    },
    urlencoded: {
        input: string,
        output: string
    }
    }> = {
    "metadata": {
        "author": "Vedansh Shetti <vedansh.shetti@gmail.com> - one-format Official Plugin",
        "name": "One-Format Strings",
        "version": "1.1.0"
    },
    tools: {
        uppercase: (s: string) => s.toUpperCase(),
        lowercase: (s: string) => s.toLowerCase(),
        urlencoded: (s: string) => encodeURIComponent(s)
    }
}

export default stringsPlugin;