export function parseSsvCollection(value: string): string[] {
  return value ? value.split(" ") : [];
}
