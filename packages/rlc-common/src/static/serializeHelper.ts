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
export function buildAllowReservedValue<ValueType>(value: ValueType) {
    return {
        allowReserved: true,
        value
    }
}
`;

export const buildExplodedAndFormStyleContent = `
export function buildExplodedAndFormStyleValue<ValueType>(value: ValueType){
    return {
        explode: true,
        style: "form",
        value
    } as const
}
`;

export const buildNonExplodedAndFormStyleContent = `
export function buildNonExplodedAndFormStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "form",
        value
    } as const
}
`;

export const buildNonExplodedAndPipeStyleContent = `
export function buildNonExplodedAndPipeStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "pipeDelimited",
        value
    } as const
}
`;

export const buildNonExplodedAndSpaceStyleContent = `
export function buildNonExplodedAndSpaceStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "spaceDelimited",
        value
    } as const
}
`;
