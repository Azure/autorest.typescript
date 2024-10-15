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
    } as const
}
`;

export const buildExplodedAndFormStyleContent = `
export function buildExplodedFormStyleValue<ValueType>(value: ValueType){
    return {
        explode: true,
        style: "form",
        value
    } as const
}
`;

export const buildNonExplodedAndFormStyleContent = `
export function buildUnexplodedFormStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "form",
        value
    } as const
}
`;

export const buildNonExplodedAndPipeStyleContent = `
export function buildUnexplodedPipeStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "pipeDelimited",
        value
    } as const
}
`;

export const buildNonExplodedAndSpaceStyleContent = `
export function buildUnexplodedSpaceStyleValue<ValueType>(value: ValueType){
    return {
        explode: false,
        style: "spaceDelimited",
        value
    } as const
}
`;
