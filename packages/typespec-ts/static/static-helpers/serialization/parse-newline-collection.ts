export function parseNewlineCollection(value: string): string[] {
  return value ? value.split("\n") : [];
}
