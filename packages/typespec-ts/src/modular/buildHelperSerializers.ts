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

  sourceFile.addStatements([
    serializeRecordFunction.content,
    isRecordElementSupportedFunction.content
  ]);
}
