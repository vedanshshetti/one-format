/**
 * @license EUPL-1.2
 * @author Vedansh Shetti <vedansh.shetti@gmail.com>
 * @copyright Copyright (C) 2026 Vedansh Shetti <vedansh.shetti@gmail.com> 
 */
import type { Plugin } from "./interfaces.js";

export default function adapter(...plugins: Plugin<any>[]) {
  const registry: Record<string, any> = {};

  plugins.forEach((plugin) => {
    // Use the plugin's name as the namespace
    const namespace = plugin.metadata.name.toLowerCase().replace(/\s+/g, '_');
    registry[namespace] = plugin.tools;
  });

  return registry;
}