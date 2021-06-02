import { HttpHeader, ObjectSchema, Property } from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

export function headersToSchema(
  headers: HttpHeader[] | undefined,
  operationFullName: string,
  isError: boolean
): ObjectSchema | undefined {
  if (!headers || !headers.length) {
    return undefined;
  }

  const headersSchema = new ObjectSchema(
    `${operationFullName}${isError ? "Exception" : ""}Headers`,
    `Defines headers for ${operationFullName} operation.`
  );

  headers.forEach(({ header, language, schema, extensions }) => {
    if (!headersSchema.properties) {
      headersSchema.properties = [];
    }

    const { description, name } = getLanguageMetadata(language);

    const prop: Property = new Property(name, description, schema, {
      // core-http serializer requires Header serialized names to be lowercase
      serializedName: header.toLocaleLowerCase()
    });

    if (extensions && extensions["x-ms-header-collection-prefix"]) {
      prop.schema.language.default["headerCollectionPrefix"] =
        extensions["x-ms-header-collection-prefix"];
    }

    headersSchema.properties.push(prop);
  });

  return headersSchema;
}
