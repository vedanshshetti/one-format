/**
 *@license EUPL-1.2
 *@author Vedansh Shetti <vedansh.shetti@gmail.com>
 *@copyright Copyright (C) 2026 Vedansh Shetti <vedansh.shetti@gmail.com> 
 */
import type { Plugin } from "./interfaces.js";

export default function adapter<Tools extends Record<string, any>>(plugin: Plugin<Tools>): {
    getMetadata: () => Plugin<Tools>["metadata"];
    getToolNames: () => string[];
} {
    return {
        getMetadata: ()=>plugin.metadata,
        getToolNames: ()=>Object.keys(plugin.tools),
        ...plugin.tools
    };
};
