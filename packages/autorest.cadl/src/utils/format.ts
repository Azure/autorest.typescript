import { format } from "prettier";

export function formatJSONFile(content: string, filepath: string) {
  return format(content, {
    filepath,
  });
}

export function formatCadlFile(
  content: string,
  filepath: string,
  options: { skip?: boolean } = {}
): string {
  if (options.skip) {
    return content;
  }
  return format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath,
  });
}
