import { format } from "prettier";

export function formatFile(
  content: string,
  options: { skip?: boolean } = {}
): string {
  if (options.skip) {
    return content;
  }
  return format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath: "file.cadl",
  });
}
