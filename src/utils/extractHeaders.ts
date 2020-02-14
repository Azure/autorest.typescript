import { OperationGroup, ObjectSchema } from "@azure-tools/codemodel";
import { getOperationFullName } from "./nameUtils";
import { headersToSchema } from "./headersToSchema";

export function extractHeaders(
  operationGroups: OperationGroup[],
  clientName: string
) {
  let responseHeaders: ObjectSchema[] = [];

  operationGroups.forEach(operationGroup =>
    operationGroup.operations.forEach(operation =>
      operation.responses?.forEach(response => {
        const operationName = getOperationFullName(
          operationGroup,
          operation,
          clientName
        );
        const headers = response.protocol.http?.headers;
        if (headers) {
          const headerSchema = headersToSchema(headers, operationName);
          headerSchema && responseHeaders.push(headerSchema);
        }
      })
    )
  );

  return responseHeaders;
}
