import { ResponseHeaderSchema, ImportKind, OperationResponse, ResponseMetadata } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationResponse } from "@cadl-lang/rest/http";

export function transformToResponseTypes(program: Program, importDetails: Map<ImportKind, Set<string>>): OperationResponse[] {
    const [routes, _diagnostics] = getAllRoutes(program);
    const rlcResponses: OperationResponse[] = [];
    let importedModels = new Set<string>();
    for (const route of routes) {
        const operationName = `${route.groupName}_${route.operation.name}`;
        const rlcOperationUnit: OperationResponse = {
            operationName,
            responses: []
        };
        for (const resp of route.responses) {
            // TODO: verify status code
            const statusCode = resp.statusCode == "*" ? `"default"` : `"${resp.statusCode}"`;
            const rlcResponseUnit: ResponseMetadata = {
                statusCode,
                description: resp.description
            };
            // transform header
            const headers = transformHeaders(resp);
            // transform body
            const body = transformBody(resp, importedModels);
            rlcOperationUnit.responses.push({
                ...rlcResponseUnit,
                headers,
                body
            });
        }
        rlcResponses.push(rlcOperationUnit);
    }
    if (importedModels.size > 0) {
        importDetails.set(ImportKind.ResponseOutput, importedModels);
    }
    return rlcResponses;
}

function transformHeaders(
    response: HttpOperationResponse): ResponseHeaderSchema[] | undefined {
    if (!response.responses.length) {
        return;
    } else if (response.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const headers = response.responses[0]?.headers;
    if (!headers || !Object.keys(headers).length) {
        return;
    }
    return Object.keys(headers).map(key => headers[key]).map(h => {
        // TODO: handle the schema part
        const header: ResponseHeaderSchema = {
            name: `"${h?.name.toLowerCase()}"`,
            type: `"string"`,
            required: !Boolean(h?.optional),
            description: ""
        };
        return header;
    });
}

function transformBody(response: HttpOperationResponse, importedModels: Set<string>) {
    if (!response.responses.length) {
        return;
    } else if (response.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const body = response.responses[0]?.body;
    // TODO: get body type
    const bodyType = body?.type?.kind == "Model" ? `${body?.type.name}Output` : undefined;
    if (!bodyType) {
        return;
    }
    importedModels.add(bodyType);
    return {
        name: "body",
        type: bodyType,
        description: ""
    };
}
