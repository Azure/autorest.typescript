export const buildMultiCollectionContent = `
export function buildMultiCollection(
  items: string[],
  parameterName: string
) {
  return items
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return \`\${parameterName}=\${item}\`;
    })
    .join("&");
}`;

export const buildPipeCollectionContent = `
export function buildPipeCollection(items: string[]): string {
  return items.join("|");
}`;

export const buildSsvCollectionContent = `
export function buildSsvCollection(items: string[]): string {
  return items.join(" ");
}`;

export const buildTsvCollectionContent = `
export function buildTsvCollection(items: string[]) {
  return items.join("\\t");
}`;

export const buildCsvCollectionContent = `
export function buildCsvCollection(items: string[]) {
  return items.join(",");
}`;
