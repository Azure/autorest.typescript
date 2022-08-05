import { CodeModel, HttpHeader, Operation, Response, SchemaContext, SchemaResponse } from "@autorest/codemodel";
import { HeaderMetadata, ImportKind, OperationResponse, ResponseMetadata } from "@azure-tools/rlc-codegen";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { responseToSchemaResponse } from "../operationHelpers";
import { getElementType, getFormatDocs, primitiveSchemaToType } from "../schemaHelpers";

export function transformResponseTypes(model: CodeModel, importDetails: Map<ImportKind, Set<string>>): OperationResponse[] {
    const operations = getAllOperationRequests(model);
    const rlcResponses: OperationResponse[] = [];
    let importedModels = new Set<string>();
    for (const operation of operations) {
        const responses = mergeResponsesAndExceptions(operation);
        const operationLanguageMetadata = getLanguageMetadata(operation.language);
        const rlcOperationUnit: OperationResponse = {
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
            const responseTypeDescription = operationLanguageMetadata.description;
            const rlcResponseUnit: ResponseMetadata = {
                statusCode,
            };
            if (responseTypeDescription) {
                rlcResponseUnit.description = responseTypeDescription;
            }
            // transform header
            transformHeaders(response, rlcResponseUnit);
            // transform body
            transformBody(response, importedModels, rlcResponseUnit)
            rlcOperationUnit.responses.push(rlcResponseUnit);
        }
        rlcResponses.push(rlcOperationUnit);
    }
    if (importedModels.size > 0) {
        importDetails.set(ImportKind.ResponseOutput, importedModels);
    }
    return rlcResponses;
}


function transformHeaders(from: Response, to: ResponseMetadata) {
    // Check if there are any required headers
    const hasDefinedHeaders =
        Boolean(from.protocol.http?.headers) &&
        Boolean(from.protocol.http?.headers.length);
    if (!hasDefinedHeaders) {
        return;
    }

    to.headers = from.protocol.http?.headers.map((h: HttpHeader) => {
        const header: HeaderMetadata = {
            name: `"${h.header.toLowerCase()}"`,
            description: getLanguageMetadata(h.language).description,
            type: primitiveSchemaToType(h.schema, [
                SchemaContext.Output,
                SchemaContext.Exception
            ]),
            required: false
        };
        return header;
    });
}

function transformBody(from: Response, importedModels: Set<string>, to: ResponseMetadata) {
    let schemaResponse: SchemaResponse = responseToSchemaResponse(from);
    const bodyType = getBodyTypeName(schemaResponse, importedModels);
    const bodyDescription = getFormatDocs(schemaResponse.schema);
    if (!bodyType) {
        return;
    }
    to.body = {
        name: "body",
        type: bodyType,
        description: bodyDescription
    };


}

/**
 * Body types are defined in the models file, this function checks if the current
 * response's body has a reference to a model or if it is a primitive, and returns the Typescript type
 * to generate
 * @param response - response to get the body type from
 * @param importedModels - track models to import
 */
function getBodyTypeName(
    response: SchemaResponse,
    importedModels: Set<string>
): string | undefined {
    return getElementType(
        response.schema,
        [SchemaContext.Output, SchemaContext.Exception],
        importedModels
    );
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