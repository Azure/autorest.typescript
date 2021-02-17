import {
  OperationGroup,
  ObjectSchema,
  Operation,
  Response
} from "@autorest/codemodel";
import { getOperationFullName } from "./nameUtils";
import { headersToSchema } from "./headersToSchema";
import { getLanguageMetadata } from "./languageHelpers";

export function extractHeaders(
  operationGroups: OperationGroup[],
  clientName: string
) {
  let responseHeaders: ObjectSchema[] = [];

  operationGroups.forEach(operationGroup =>
    operationGroup.operations.forEach(operation => {
      processHeaders(
        false,
        operation.responses || [],
        responseHeaders,
        operationGroup,
        operation,
        clientName
      );
      processHeaders(
        true,
        operation.exceptions || [],
        responseHeaders,
        operationGroup,
        operation,
        clientName
      );
    })
  );

  return responseHeaders;
}

function processHeaders(
  isException: boolean,
  responses: Response[],
  responseHeaders: ObjectSchema[],
  operationGroup: OperationGroup,
  operation: Operation,
  clientName: string
) {
  responses.forEach(response => {
    const operationName = getOperationFullName(
      operationGroup,
      operation,
      clientName
    );
    const headers = response.protocol.http?.headers;
    if (headers) {
      const headerSchema = headersToSchema(headers, operationName, isException);
      if (headerSchema) {
        updateResponseHeaders(headerSchema, responseHeaders);
      }
    }
  });
}

/*
 * Checks if there is an existing schema as the headersSchema
 * in the responseHeaders. If there is one, then merge its
 * properties and properties of headersSchema. If there is none,
 * then push the headerSchema to the responseHeaders.
 */
function updateResponseHeaders(
  headerSchema: ObjectSchema,
  responseHeaders: ObjectSchema[]
) {
  let pushHeaderSchema: boolean = true;
  for (let responseHeader of responseHeaders) {
    if (
      getLanguageMetadata(responseHeader.language).name ==
      getLanguageMetadata(headerSchema.language).name
    ) {
      if (headerSchema.properties) {
        if (responseHeader.properties) {
          responseHeader.properties.concat(headerSchema.properties);
        } else {
          responseHeader.properties = headerSchema.properties;
        }
        pushHeaderSchema = false;
      }
    }
  }

  if (pushHeaderSchema) {
    responseHeaders.push(headerSchema);
  }
}
