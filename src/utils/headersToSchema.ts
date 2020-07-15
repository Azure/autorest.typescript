import {
  HttpHeader,
  ObjectSchema,
  Property,
  Languages
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "./nameUtils";

export function headersToSchema(
  headers: HttpHeader[] | undefined,
  operationFullName: string
): ObjectSchema | undefined {
  if (!headers || !headers.length) {
    return undefined;
  }

  const headersSchema = new ObjectSchema(
    `${operationFullName}Headers`,
    `Defines headers for ${operationFullName} operation.`
  );

  headers.forEach(({ header, language, schema }) => {
    if (!headersSchema.properties) {
      headersSchema.properties = [];
    }

    if (!language) {
      language = {
        default: {
          name: normalizeName(header, NameType.Property),
          description: ""
        }
      };
    }

    const { description, name } = getLanguageMetadata(language);
    headersSchema.properties.push(
      new Property(name, description, schema, {
        // core-http serializer requires Header serialized names to be lowercase
        serializedName: header.toLocaleLowerCase()
      })
    );
  });

  return headersSchema;
}
