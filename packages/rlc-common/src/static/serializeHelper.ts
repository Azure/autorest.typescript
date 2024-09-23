export const buildMultiCollectionContent = `
export function buildMultiCollection(
  items: string[],
  parameterName: string
): string {
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
export function buildPipeCollection(items: string[] | number[]): string {
  return items.join("|");
}`;

export const buildSsvCollectionContent = `
export function buildSsvCollection(items: string[] | number[]): string {
  return items.join(" ");
}`;

export const buildTsvCollectionContent = `
export function buildTsvCollection(items: string[] | number[]): string {
  return items.join("\\t");
}`;

export const buildCsvCollectionContent = `
export function buildCsvCollection(items: string[] | number[]): string {
  return items.join(",");
}`;

export const buildAllowReservedContent = `
function withReservedCharacters(value: string) {
    return {
        allowReserved: true,
        value
    }
}
`;

export const buildExplodedAndFormStyleContent = `
function withExplodedAndFormStyle(value: string[] | Record<string, unknown>){
    return {
        explode: true,
        style: "form",
        value: value as any
    } as const
}
`;

export const buildNonExplodedAndFormStyleContent = `
function withNonExplodedAndFormStyle(value: string[] | Record<string, unknown>){
    return {
        explode: false,
        style: "form",
        value: value as any
    } as const
}
`;

export const buildNonExplodedAndPipeStyleContent = `
function withNonExplodedAndPipeStyle(value: string[] | Record<string, unknown>){
    return {
        explode: false,
        style: "pipeDelimited",
        value: value as any
    } as const
}
`;

export const buildNonExplodedAndSpaceStyleContent = `
function withNonExplodedAndPipeStyle(value: string[] | Record<string, unknown>){
    return {
        explode: false,
        style: "spaceDelimited",
        value: value as any
    } as const
}
`;
