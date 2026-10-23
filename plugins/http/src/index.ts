import { HTTP_STATUS_MESSAGES, type HttpStatusCode } from "./types.js";

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


const httpPlugin: PluginType<{
    codeToFormal: {
            input: HttpStatusCode,
            output: `HTTP/${HttpStatusCode} ${string}`
    },
    codeToMessage: {
        input: HttpStatusCode,
        output: string
    }
    }> = {
    "metadata": {
        "author": "Vedansh Shetti <vedansh.shetti@gmail.com> - one-format Official Plugin",
        "name": "One-Format Datetime",
        "version": "1.0.0"
    },
    tools: {
        codeToFormal: (code: HttpStatusCode) => `HTTP/${code} ${HTTP_STATUS_MESSAGES[code]}`,
        codeToMessage: (code: HttpStatusCode) => HTTP_STATUS_MESSAGES[code]
    }
}

export default httpPlugin;