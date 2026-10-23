/**
 *@license EUPL-1.2
 *@author Vedansh Shetti <vedansh.shetti@gmail.com>
 *@copyright Copyright (C) 2026 Vedansh Shetti <vedansh.shetti@gmail.com> 
 */
import type { Plugin } from "./interfaces.js";

export default function adapter<Tools extends Record<string, any>>(plugin: Plugin<Tools>): {
    getMetadata: () => Plugin<Tools>["metadata"];
    getToolNames: () => string[];
    hasTool: (tool: string) => boolean;
} & Plugin<Tools>["tools"] {
    return {
        getMetadata: () => plugin.metadata,
        getToolNames: () => Object.keys(plugin.tools),
        hasTool: (tool: string) => tool in plugin.tools,
        ...plugin.tools
    };
};
