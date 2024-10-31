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

function isFullyUpperCase(identifier: string, maxUppercasePreserve: number = 10) {
  const len = identifier.length;
  if (len > 1) {
    if (
      len <= maxUppercasePreserve &&
      identifier === identifier.toUpperCase()
    ) {
      return true;
    }

    if (len <= maxUppercasePreserve + 1 && identifier.endsWith("s")) {
      const i = identifier.substring(0, len - 1);
      if (i.toUpperCase() === i) {
        return true;
      }
    }
  }
  return false;
}

function deconstruct(
  identifier: string | Array<string>,
  maxUppercasePreserve: number
): Array<string> {
  return `${identifier}`
    .replace(/([a-z]+)([A-Z])/g, "$1 $2") // Add a space in between camelCase words(e.g. fooBar => foo Bar)
    .replace(/(\d+)/g, " $1 ") // Adds a space after numbers(e.g. foo123 => foo123 bar)
    .replace(/\b([A-Z]+)([A-Z])s([^a-z])(.*)/g, "$1$2« $3$4") // Add a space after a plural uppper cased word(e.g. MBsFoo => MBs Foo)
    .replace(/\b([A-Z]+)([A-Z])([a-z]+)/g, "$1 $2$3") // Add a space between an upper case word(2 char+) and the last captial case.(e.g. SQLConnection -> SQL Connection)
    .replace(/«/g, "s")
    .trim()
    .split(/[\W|_]+/)
    .map((each) =>
      isFullyUpperCase(each, maxUppercasePreserve) ? each : each.toLowerCase()
    );
}

function isEqual(s1: string, s2: string): boolean {
  // when s2 is undefined and s1 is the string 'undefined', it returns 0, making this true.
  // To prevent that, first we need to check if s2 is undefined.
  return (
    s2 !== undefined &&
    !!s1 &&
    !s1.localeCompare(s2, undefined, { sensitivity: "base" })
  );
}

function removeSequentialDuplicates(identifier: Iterable<string>) {
  const ids = [...identifier].filter((each) => !!each);
  for (let i = 0; i < ids.length; i++) {
    while (isEqual(ids[i]!, ids[i - 1]!)) {
      ids.splice(i, 1);
    }
    while (isEqual(ids[i]!, ids[i - 2]!) && isEqual(ids[i + 1]!, ids[i - 1]!)) {
      ids.splice(i, 2);
    }
  }

  return ids;
}
function applyFormat(
  normalizedContent: Array<string>,
  overrides: Record<string, string> = {},
  separator = "",
  formatter: (s: string, i: number) => string = (s) => s
) {
  return normalizedContent
    .map(
      (each, index) => overrides[each.toLowerCase()] || formatter(each, index)
    )
    .join(separator);
}

function normalize(
  identifier: string | Array<string>,
  removeDuplicates = true,
  maxUppercasePreserve = 0
): Array<string> {
  if (!identifier || identifier.length === 0) {
    return [""];
  }
  return typeof identifier === "string"
    ? normalize(
      deconstruct(identifier, maxUppercasePreserve),
      removeDuplicates,
      maxUppercasePreserve
    )
    : removeDuplicates
      ? removeSequentialDuplicates(identifier)
      : identifier;
}

export function pascal(name: string) {
  const words = normalize(deconstruct(name, 6), false, 6);
  const form = applyFormat(words, {}, "", (each) => capitalize(each));
  return form;
}

function capitalize(s: string): string {
  return s ? `${s.charAt(0).toUpperCase()}${s.slice(1)}` : s;
}
