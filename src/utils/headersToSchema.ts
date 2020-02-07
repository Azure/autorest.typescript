import { HttpHeader, ObjectSchema, Property } from "@azure-tools/codemodel";

export function headersToSchema(
  headers: HttpHeader[] | undefined,
  operationFullName: string
): ObjectSchema | undefined {
  if (!headers || !headers.length) {
    return undefined;
  }
  const headersSchema = new ObjectSchema(`${operationFullName}Headers`, "");

  headers.forEach(({ header, schema }) => {
    if (!headersSchema.properties) {
      headersSchema.properties = [];
    }
    headersSchema.properties.push(new Property(header, "", schema));
  });

  return headersSchema;
}
