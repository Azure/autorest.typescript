import {
  OperationGroup,
  ObjectSchema,
  Operation,
  Response
} from "@azure-tools/codemodel";
import { getOperationFullName } from "./nameUtils";
import { headersToSchema } from "./headersToSchema";

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
      headerSchema && responseHeaders.push(headerSchema);
    }
  });
}
