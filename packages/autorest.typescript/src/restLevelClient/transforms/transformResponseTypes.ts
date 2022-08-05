import { CodeModel, Operation, Response, SchemaResponse } from "@autorest/codemodel";
import { OperationResponse, ResponseMetadata } from "@azure-tools/rlc-codegen";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { responseToSchemaResponse } from "../operationHelpers";

export function transformResponseTypes(model: CodeModel): OperationResponse[] {
    const operations = getAllOperationRequests(model);
    const parameters: OperationResponse[] = [];
    for (const operation of operations) {
        const responses = mergeResponsesAndExceptions(operation);
        const operationLanguageMetadata = getLanguageMetadata(operation.language);
        const param: OperationResponse = {
            operationName: `${operationLanguageMetadata.name}`,
            responses: []
        };
        for (const response of responses) {
            // We'll need http information such as headers, statusCodes, etc continue if not available
            if (!response.protocol.http) {
                continue;
            }
            let schemaResponse: SchemaResponse = responseToSchemaResponse(response);
            const statusCode = getStatusCode(schemaResponse);
            const resp: ResponseMetadata = {
                statusCode,
            };

        }
    }
    return parameters;
}

// Gets a list of all the available operations requests in the specification
function getAllOperationRequests(model: CodeModel) {
    let operations: Operation[] = [];
    model.operationGroups.forEach(og =>
        og.operations
            .filter(o => o.requests && o.requests.length)
            .forEach(o => {
                operations.push(o);
            })
    );

    return operations;
}

// Since REST clients don't throw on non-success status codes we treat responses and exceptions the same
function mergeResponsesAndExceptions(operation: Operation) {
    const responses: Response[] = [];

    if (operation.responses) {
        responses.push(...operation.responses);
    }

    if (operation.exceptions) {
        responses.push(...operation.exceptions);
    }

    return responses;
}

/**
 * Extracts the status code for a given response definition
 * @param response - response definition to extract the status code from
 */
export function getStatusCode(response: Response): string {
    if (response.protocol.http === undefined) {
        throw new Error(
            "generateResponseTypes.getStatusCode: Can't extract response definition statusCode from undefined http metadata"
        );
    }

    // Extracting the status code for the response definition. Eventhough it is represented as an array of status codes
    // in M4, in reality it can only contain a single status code, hence we are always picking the first one.
    let statusCode = response.protocol.http?.statusCodes[0];

    return `"${statusCode}"`;
}