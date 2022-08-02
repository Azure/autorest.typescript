export function camelCase(str: string) {
  if (!/^(?<![A-Z])[A-Z]{1,4}(?![A-Z])/.test(str)) {
    return str;
  }

  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
