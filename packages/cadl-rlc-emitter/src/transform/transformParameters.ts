import { ImportKind, OperationParameter, ParameterBodyMetadata, ParameterMetadata, Schema } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationParameter, HttpOperationParameters } from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";

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
            program,
            parameters);
        // transform path param
        const pathParams = transformPathParameters();
        // transform header param includeing content-type
        const headerParams = transformHeaderParameters(
            program,
            parameters);
        // transform body
        const bodyParameter = transformBodyParameters(
            program,
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
    program: Program,
    paramType: "query" | "path" | "header",
    parameter: HttpOperationParameter): ParameterMetadata {
    const schema = getSchemaForType(program, parameter.param.type) as Schema;
    const name = getParameterName(parameter.name);
    return {
        type: paramType,
        name,
        param: {
            name,
            type: schema.name,
            required: !Boolean(parameter.param.optional)
        }
    };
}

function getParameterName(name: string) {
    if (name === "content-type") {
        return "contentType";
    }
    return name;
}

function transformQueryParameters(
    program: Program,
    parameters: HttpOperationParameters): ParameterMetadata[] {
    const queryParameters = parameters.parameters.filter(p => p.type === "query");
    if (!queryParameters.length) {
        return [];
    }
    return queryParameters.map(qp => getParameterMetadata(program, "query", qp));
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
    program: Program,
    parameters: HttpOperationParameters): ParameterMetadata[] {
    const headerParameters = parameters.parameters.filter(
        p => (p.type === "header")
    );
    if (!headerParameters.length) {
        return [];
    }
    return headerParameters.map(qp => getParameterMetadata(program, "header", qp));
}

function transformBodyParameters(
    program: Program,
    parameters: HttpOperationParameters,
    importedModels: Set<string>): ParameterBodyMetadata | undefined {
    const bodyParameters = parameters.body;
    if (!bodyParameters) {
        return undefined;
    }
    const bodySchema = getSchemaForType(program, bodyParameters.type) as Schema
    if (bodySchema.type == "object") {
        importedModels.add(bodySchema.name);
    }
    return {
        isPartialBody: false,
        body: [{
            name: "body",
            type: bodySchema.name,
            required: !Boolean(bodyParameters.optional)
        }]
    };
}