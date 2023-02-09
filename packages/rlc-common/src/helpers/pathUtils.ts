import * as path from "path";

export function getRelativePartFromSrcPath(srcPath: string) {
  const sep = srcPath.includes(path.sep + "src") ? path.sep: "/"
  const relativePart = srcPath.substring(srcPath.indexOf(sep + "src") + 4);
  return relativePart.startsWith(sep)
    ? relativePart.substring(1)
    : relativePart;
}
