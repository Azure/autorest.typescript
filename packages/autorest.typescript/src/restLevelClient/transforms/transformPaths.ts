import {
  CodeModel,
  ImplementationLocation,
  Operation,
  ParameterLocation,
  Response,
  SchemaContext
} from "@autorest/codemodel";
import { Paths, PathParameter, ResponseTypes } from "@azure-tools/rlc-codegen";
import { isEqual } from "lodash";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { REST_CLIENT_RESERVED } from "../generateMethodShortcuts";
import { isLongRunningOperation } from "../helpers/hasPollingOperations";
import { getOperationParameters } from "../helpers/operationHelpers";
import {
  gerOperationSuccessStatus,
  getResponseTypeName
} from "../operationHelpers";
import { getElementType } from "../schemaHelpers";

export function transformPaths(
  model: CodeModel,
  {
    importedParameters,
    clientImports,
    importedResponses
  }: {
    importedParameters: Set<string>;
    importedResponses: Set<string>;
    clientImports: Set<string>;
  }
): Paths {
  const pathDictionary: Paths = {};

  for (const operationGroup of model.operationGroups) {
    const operationGroupName = normalizeName(
      getLanguageMetadata(operationGroup.language).name,
      NameType.Interface,
      true,
      REST_CLIENT_RESERVED
    );
    for (const operation of operationGroup.operations) {
      const operationName = getLanguageMetadata(operation.language).name;
      const operationDescription = getLanguageMetadata(operation.language)
        .description;
      const pathParameters: PathParameter[] =
        operation.parameters
          ?.filter(p => p.protocol.http?.in === ParameterLocation.Path)
          .map(p => {
            const languageMetadata = getLanguageMetadata(p.language);
            return {
              name: languageMetadata.serializedName || languageMetadata.name,
              type: getElementType(p.schema, [
                SchemaContext.Input,
                SchemaContext.Exception
              ]),
              description: languageMetadata.description
            };
          }) || [];
      const path: string = operation.requests?.[0].protocol.http?.path;
      pathParameters.sort(function compare(a: PathParameter, b: PathParameter) {
        return path.indexOf(a.name) - path.indexOf(b.name);
      });

      for (const request of operation.requests || []) {
        const path: string = (request.protocol.http?.path as string) || "";
        const method = request.protocol.http?.method;

        if (path && method) {
          if (!pathDictionary[path]) {
            pathDictionary[path] = {
              operationGroupName: operationGroupName,
              pathParameters,
              methods: {},
              name: operationName,
              annotations: {
                isLongRunning: isLongRunningOperation(operation)
              }
            };
          }
          const hasOptionalOptions = !hasRequiredOptions(operation);

          const newMethod = {
            description: operationDescription,
            optionsName: getOperationOptionsType(operation, importedParameters),
            hasOptionalOptions,
            returnType: `StreamableMethod<${getOperationReturnType(
              operation,
              importedResponses,
              clientImports
            )}>`,
            responseTypes: getResponseTypes(operation),
            successStatus: gerOperationSuccessStatus(operation),
            operationName
          };

          if (
            pathDictionary[path].methods[`${method}`] &&
            !pathDictionary[path].methods[`${method}`].some(m =>
              isEqual(m, newMethod)
            )
          ) {
            pathDictionary[path].methods[`${method}`].push(newMethod);
          } else {
            pathDictionary[path].methods[`${method}`] = [newMethod];
          }
        }
      }
    }
  }
  return pathDictionary;
}

function getOperationOptionsType(
  operation: Operation,
  importedParameters = new Set<string>()
) {
  const paramsName = `${
    getLanguageMetadata(operation.language).name
  }Parameters`;
  importedParameters.add(paramsName);

  return paramsName;
}

function hasRequiredOptions(operation: Operation) {
  return getOperationParameters(operation)
    .filter(p => p.implementation === ImplementationLocation.Method)
    .filter(p => ["query", "body", "headers"].includes(p.protocol.http?.in))
    .some(p => p.required);
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(operation: Operation): ResponseTypes {
  let returnTypes: ResponseTypes = {
    error: [],
    success: []
  };
  if (
    (operation.responses && operation.responses.length) ||
    (operation.exceptions && operation.exceptions.length)
  ) {
    function getResponseType(responses: Response[]) {
      return responses
        .filter(
          r =>
            r.protocol.http?.statusCodes && r.protocol.http?.statusCodes.length
        )
        .map(r => {
          const responseName = getResponseTypeName(operation, r);
          return responseName;
        });
    }

    returnTypes.error = getResponseType(operation.exceptions ?? []);
    returnTypes.success = getResponseType(operation.responses ?? []);
  }
  return returnTypes;
}

function getOperationReturnType(
  operation: Operation,
  importedResponses = new Set<string>(),
  coreClientImports = new Set<string>()
) {
  let returnType: string = "HttpResponse";
  if (
    (operation.responses && operation.responses.length) ||
    (operation.exceptions && operation.exceptions.length)
  ) {
    const responses = [
      ...(operation.responses ?? []),
      ...(operation.exceptions ?? [])
    ];
    const responseTypes = responses
      .filter(
        r => r.protocol.http?.statusCodes && r.protocol.http?.statusCodes.length
      )
      .map(r => {
        const responseName = getResponseTypeName(operation, r);
        importedResponses.add(responseName);
        return responseName;
      });

    if (responseTypes.length) {
      if (
        responseTypes.indexOf("HttpResponse") > -1 &&
        !coreClientImports.has(returnType)
      ) {
        coreClientImports.add("HttpResponse");
      }
      returnType = responseTypes.join(" | ");
    }
  }
  if (returnType === "HttpResponse" && !coreClientImports.has(returnType)) {
    coreClientImports.add(returnType);
  }
  return returnType;
}
