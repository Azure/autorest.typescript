export function parseCsvCollection(value: string): string[] {
  return value ? value.split(",") : [];
}
