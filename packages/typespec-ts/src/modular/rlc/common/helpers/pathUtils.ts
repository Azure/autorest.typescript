import * as path from "path";

export function getRelativePartFromSrcPath(
  srcPath: string,
  isModularLibrary: boolean = false
) {
  const sep = srcPath.includes(path.sep + "src") ? path.sep : "/";
  let relativePart = srcPath.substring(srcPath.indexOf(sep + "src") + 4);
  if (isModularLibrary) {
    relativePart = relativePart.substring(srcPath.indexOf(sep + "rest"), +5);
  }
  return relativePart.startsWith(sep)
    ? relativePart.substring(1)
    : relativePart;
}
