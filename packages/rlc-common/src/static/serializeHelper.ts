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
/**
 * The helper to build a wrapper object for a value with allowReserved as true.
 */
export function buildAllowReserved<ValueType>(value: ValueType): { allowReserved: true, value: ValueType } {
    return {
        allowReserved: true,
        value
    }
}
`;

export const buildExplodedAndFormStyleContent = `
/**
 * The helper to build a wrapper object for a value with explode as true and form style.
 */
export function buildExplodedFormStyle<ValueType>(value: ValueType): { explode: true, style: "form", value: ValueType } {
  return {
    explode: true,
    style: "form",
    value,
  };
}
`;

export const buildNonExplodedAndFormStyleContent = `
/**
 * The helper to build a wrapper object for a value with explode as false and form style.
 */
export function buildUnexplodedFormStyle<ValueType>(value: ValueType): { explode: false, style: "form", value: ValueType }{
    return {
        explode: false,
        style: "form",
        value
    }
}
`;

export const buildNonExplodedAndPipeStyleContent = `
/**
 * The helper to build a wrapper object for a value with explode as false and pipeDelimited style.
 */
export function buildUnexplodedPipeStyle<ValueType>(value: ValueType): { explode: false, style: "pipeDelimited", value: ValueType }{
    return {
        explode: false,
        style: "pipeDelimited",
        value
    }
}
`;

export const buildNonExplodedAndSpaceStyleContent = `
/**
 * The helper to build a wrapper object for a value with explode as false and spaceDelimited style.
 */
export function buildUnexplodedSpaceStyle<ValueType>(value: ValueType): { explode: false, style: "spaceDelimited", value: ValueType }{
    return {
        explode: false,
        style: "spaceDelimited",
        value
    }
}
`;
