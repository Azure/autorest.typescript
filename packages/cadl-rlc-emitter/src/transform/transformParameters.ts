import { ImportKind, OperationParameter, ParameterBodyMetadata, ParameterMetadata } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationParameter, HttpOperationParameters } from "@cadl-lang/rest/http";

export function transformToParameterTypes(
    program: Program,
    importDetails: Map<ImportKind, Set<string>>): OperationParameter[] {
    const [routes, _diagnostics] = getAllRoutes(program);
    const rlcParameters: OperationParameter[] = [];
    let importedModels = new Set<string>();
    for (const route of routes) {
        const operationName = `${route.groupName}_${route.operation.name}`;
        const parameters = route.parameters;
        const rlcParameter: OperationParameter = {
            operationName,
            parameters: []
        };
        // transform query param
        const queryParams = transformQueryParameters(
            parameters);
        // transform path param
        const pathParams = transformPathParameters();
        // transform header param includeing content-type
        const headerParams = transformHeaderParameters(
            parameters);
        // transform body
        const bodyParameter = transformBodyParameters(
            parameters,
            importedModels
        );
        rlcParameter.parameters.push({
            parameters: [...queryParams, ...pathParams, ...headerParams],
            body: bodyParameter
        });
        rlcParameters.push(rlcParameter);
    }
    if (importedModels.size > 0) {
        importDetails.set(ImportKind.ParameterInput, importedModels);
    }
    return rlcParameters;
}

function getParameterMetadata(
    paramType: "query" | "path" | "header",
    parameter: HttpOperationParameter): ParameterMetadata {
    const name = getParameterName(parameter.name);
    return {
        type: paramType,
        name,
        param: {
            name, // TODO
            description: "Remember to update description from doc", // TODO
            type: "any",// TODO
            required: !Boolean(parameter.param.optional),
        }
    };;
}

function getParameterName(name: string) {
    if (name === "content-type") {
        return "contentType";
    }
    return `"${name}"`;
}

function transformQueryParameters(
    parameters: HttpOperationParameters): ParameterMetadata[] {
    const queryParameters = parameters.parameters.filter(p => p.type === "query");
    if (!queryParameters.length) {
        return [];
    }
    return queryParameters.map(qp => getParameterMetadata("query", qp));
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns 
 */
function transformPathParameters() {
    // TODO
    return [];
}

function transformHeaderParameters(
    parameters: HttpOperationParameters): ParameterMetadata[] {
    const headerParameters = parameters.parameters.filter(
        p => (p.type === "header")
    );
    if (!headerParameters.length) {
        return [];
    }
    return headerParameters.map(qp => getParameterMetadata("header", qp));
}

function transformBodyParameters(
    parameters: HttpOperationParameters,
    importedModels: Set<string>): ParameterBodyMetadata | undefined {
    const bodyParameters = parameters.body;
    if (!bodyParameters) {
        return undefined;
    }
    // TODO: handle more body types
    const bodyType = (bodyParameters.type.kind === "Model") ? bodyParameters.type.name : "any";
    if (bodyType !== "any") {
        importedModels.add(bodyType);
    }
    return {
        isPartialBody: false,
        body: [{
            name: "body",
            type: bodyType,
            required: !Boolean(bodyParameters.optional)
        }]
    };
}