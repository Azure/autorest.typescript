export function pascalCase(str: string) {
  return str.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1);
  });
}
