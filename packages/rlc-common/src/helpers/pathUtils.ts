// FIXME https://github.com/Azure/autorest.typescript/issues/1720
export function getRelativePartFromSrcPath(srcPath: string) {
  const relativePart = srcPath.substring(srcPath.indexOf("/src/") + 4);
  return relativePart.startsWith("/")
    ? relativePart.substring(1)
    : relativePart;
}
