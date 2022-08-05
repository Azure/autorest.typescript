import { HeaderMetadata, ImportKind, OperationResponse, ResponseMetadata } from "@azure-tools/rlc-codegen";
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
            transformHeaders(resp, rlcResponseUnit);
            // transform body
            transformBody(resp, importedModels, rlcResponseUnit)
            rlcOperationUnit.responses.push(rlcResponseUnit);
        }
        rlcResponses.push(rlcOperationUnit);
    }
    if (importedModels.size > 0) {
        importDetails.set(ImportKind.ResponseOutput, importedModels);
    }
    return rlcResponses;
}

function transformHeaders(from: HttpOperationResponse, to: ResponseMetadata) {
    if (!from.responses.length) {
        return;
    } else if (from.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const headers = from.responses[0]?.headers;
    if (!headers || !Object.keys(headers).length) {
        return;
    }
    to.headers = Object.keys(headers).map(key => headers[key]).map(h => {
        // TODO: handle the schema part
        const header: HeaderMetadata = {
            name: `"${h?.name.toLowerCase()}"`,
            type: `"string"`,
            required: !Boolean(h?.optional),
            description: ""
        };
        return header;
    });
}

function transformBody(from: HttpOperationResponse, importedModels: Set<string>, to: ResponseMetadata) {
    if (!from.responses.length) {
        return;
    } else if (from.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const body = from.responses[0]?.body;
    // TODO: get body type
    const bodyType = body?.type?.kind == "Model" ? `${body?.type.name}Output` : undefined;
    if (!bodyType) {
        return;
    }
    importedModels.add(bodyType);
    to.body = {
        name: "body",
        type: bodyType,
        description: ""
    };
}