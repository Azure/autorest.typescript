export const buildMultiCollectionContent = `
export function buildMultiCollection(
  oriArray: string[],
  parameterName: string
) {
  return oriArray
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return \`\${parameterName}=\${item}\`;
    })
    .join("&");
}`;

export const buildPipeCollectionContent = `
export function buildPipeCollection(oriArray: string[]): string {
  return oriArray.join("|");
}`;

export const buildSsvCollectionContent = `
export function buildSsvCollection(oriArray: string[]): string {
  return oriArray.join(" ");
}`;

export const buildTsvCollectionContent = `
export function buildTsvCollection(oriArray: string[]) {
  return oriArray.join("\t");
}`;
