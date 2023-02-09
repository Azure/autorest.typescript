import * as path from "path";

// FIXME https://github.com/Azure/autorest.typescript/issues/1720
export function getRelativePartFromSrcPath(srcPath: string) {
  const relativePart = srcPath.substring(srcPath.indexOf(path.sep + "src") + 4);
  return relativePart.startsWith(path.sep)
    ? relativePart.substring(1)
    : relativePart;
}
