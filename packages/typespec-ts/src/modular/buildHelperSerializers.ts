import { Project } from "ts-morph";
import { useContext } from "../contextManager.js";
const serializeRecordFunction = {
  symbol: "serializeRecord",
  content: `
export function serializeRecord<
  T extends string | number | boolean | Date | null,
  R
>(item: Record<string, T>): Record<string, R>;
export function serializeRecord<T, R>(
  item: Record<string, T>,
  serializer: (item: T) => R
): Record<string, R>;
export function serializeRecord<T, R>(
  item: Record<string, T>,
  serializer?: (item: T) => R
): Record<string, R> {
  return Object.keys(item).reduce(
    (acc, key) => {
      if (isSupportedRecordType(item[key])) {
        acc[key] = item[key] as any;
      } else if (serializer) {
        const value = item[key];
        if (value !== undefined) {
          acc[key] = serializer(value);
        }
      } else {
        console.warn(\`Don't know how to serialize \${item[key]}\`);
        acc[key] = item[key] as any;
      }
      return acc;
    },
    {} as Record<string, R>
  );
}`
};
const isRecordElementSupportedFunction = {
  symbol: "isSupportedRecordType",
  content: `
function isSupportedRecordType(t: any) {
  return ["number", "string", "boolean", "null"].includes(typeof t) || t instanceof Date;
}
`
};

const buildMultiCollection = {
  symbol: "buildMultiCollection",
  content: `export function buildMultiCollection(
  items: string[],
  parameterName: string,
): string {
  return items
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return \`\${parameterName}=\${item}\`;
    })
    .join("&");
}`
};

const buildPipeCollection = {
  symbol: "buildPipeCollection",
  content: `
export function buildPipeCollection(items: string[] | number[]): string {
  return items.join("|");
}`
};

const buildTsvCollection = {
  symbol: "buildTsvCollection",
  content: `export function buildTsvCollection(items: string[] | number[]): string {
  return items.join("\\t");
}`
};

const buildSsvCollection = {
  symbol: "buildSsvCollection",
  content: `export function buildSsvCollection(items: string[] | number[]): string {
  return items.join(" ");
}`
};

const buildCsvCollection = {
  symbol: "buildCsvCollection",
  content: `export function buildCsvCollection(items: string[] | number[]): string {
  return items.join(",");
}`
};

export function emitSerializerHelpersFile(
  project: Project,
  srcPath: string = "src"
) {
  const symbolMap = useContext("symbolMap");
  const sourceFile = project.createSourceFile(
    `${srcPath}/helpers/serializerHelpers.ts`,
    "",
    {
      overwrite: true
    }
  );

  if (!symbolMap.has(serializeRecordFunction.symbol)) {
    symbolMap.set(serializeRecordFunction.symbol, sourceFile);
  }

  if (!symbolMap.has(isRecordElementSupportedFunction.symbol)) {
    symbolMap.set(isRecordElementSupportedFunction.symbol, sourceFile);
  }

  if (!symbolMap.has(buildMultiCollection.symbol)) {
    symbolMap.set(buildMultiCollection.symbol, sourceFile);
  }

  if (!symbolMap.has(buildPipeCollection.symbol)) {
    symbolMap.set(buildPipeCollection.symbol, sourceFile);
  }

  if (!symbolMap.has(buildSsvCollection.symbol)) {
    symbolMap.set(buildSsvCollection.symbol, sourceFile);
  }

  if (!symbolMap.has(buildTsvCollection.symbol)) {
    symbolMap.set(buildTsvCollection.symbol, sourceFile);
  }

  if (!symbolMap.has(buildCsvCollection.symbol)) {
    symbolMap.set(buildCsvCollection.symbol, sourceFile);
  }

  sourceFile.addStatements([
    serializeRecordFunction.content,
    isRecordElementSupportedFunction.content,
    buildMultiCollection.content,
    buildPipeCollection.content,
    buildSsvCollection.content,
    buildTsvCollection.content,
    buildCsvCollection.content
  ]);
}
