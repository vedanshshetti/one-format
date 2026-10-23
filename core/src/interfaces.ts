type PluginFn<Input = any, Output = any> = (input: Input) => Output;

interface PluginMetadata {
    name: string; // Plugin Name
    author: string; // Author
    version?: string; // Version Number, preferably SemVer.
}

export interface Plugin<Tools extends Record<string, any>> {
    metadata: PluginMetadata;
    tools: {
        [K in keyof Tools]: PluginFn<Tools[K]['input'], Tools[K]['output']>;
    };
}