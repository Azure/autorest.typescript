export function parsePipeCollection(value: string): string[] {
  return value ? value.split("|") : [];
}
