export const buildMultiCollectionContent = `
export function buildMultiCollection(
  queryParameters: string[],
  parameterName: string
) {
  return queryParameters
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return \`\${parameterName}=\${item}\`;
    })
    .join("&");
}`;

export const buildPipeCollectionContent = `
export function buildPipeCollection(queryParameters: string[]): string {
  return queryParameters.join("|");
}`;

export const buildSsvCollectionContent = `
export function buildSsvCollection(queryParameters: string[]): string {
  return queryParameters.join(" ");
}`;

export const buildTsvCollectionContent = `
export function buildTsvCollection(queryParameters: string[]) {
  return queryParameters.join("\t");
}`;
