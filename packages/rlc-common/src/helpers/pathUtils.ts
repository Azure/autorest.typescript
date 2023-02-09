import * as path from "path";

export function getRelativePartFromSrcPath(srcPath: string) {
  const relativePart = srcPath.substring(srcPath.indexOf(path.sep + "src") + 4);
  return relativePart.startsWith(path.sep)
    ? relativePart.substring(1)
    : relativePart;
}
