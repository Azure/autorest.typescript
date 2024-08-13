export function toCamelCase(name: string): string {
  let str = name;
  // Handle snake case or dash-separated words
  str = str.replace(/[-_]+/g, " ");

  // Handle pascal case or camel case
  str = str.replace(/([a-z])([A-Z])/g, (_match, p1, p2) => {
    return p1 + " " + p2.toLowerCase();
  });

  // Convert to camel case
  str = str.replace(/\s(.)/g, (_match, p1) => {
    return p1.toUpperCase();
  });

  // Lowercase the first character
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function camelToSnakeCase(name: string): string {
  const camelToSnakeCaseRe = (str: string) =>
    str
      .replace(/\s+/g, "_")
      .replace(/\$/g, "")
      .replace(/-/g, "_")
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

  return camelToSnakeCaseRe(name[0]!.toLowerCase() + name.slice(1));
}

export function toPascalCase(name: string): string {
  let str = name;
  // Handle snake case or dash-separated words
  str = str.replace(/[-_]+/g, " ");

  // Handle pascal case or camel case
  str = str.replace(/([a-z])([A-Z])/g, (_match, p1, p2) => {
    return p1 + " " + p2.toLowerCase();
  });

  // Convert to camel case
  str = str.replace(/\s(.)/g, (_match, p1) => {
    return p1.toUpperCase();
  });

  // Lowercase the first character
  return str.charAt(0).toUpperCase() + str.slice(1);
}
