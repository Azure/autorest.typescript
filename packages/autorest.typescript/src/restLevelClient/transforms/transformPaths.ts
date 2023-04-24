// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  ImplementationLocation,
  Operation,
  ParameterLocation,
  Response,
  SchemaContext
} from "@autorest/codemodel";
import {
  Paths,
  PathParameter,
  ResponseTypes,
  OperationMethod
} from "@azure-tools/rlc-common";
import { isEqual } from "lodash";
import { isPagingOperation } from "../../utils/extractPaginationDetails";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { isLongRunningOperation } from "../helpers/hasPollingOperations";
import { getOperationParameters } from "../helpers/operationHelpers";
import {
  gerOperationSuccessStatus,
  getResponseTypeName
} from "../operationHelpers";
import { getElementType } from "../schemaHelpers";

export function transformPaths(model: CodeModel): Paths {
  const importedParameters = new Set<string>(),
    clientImports = new Set<string>(),
    importedResponses = new Set<string>();
  const pathDictionary: Paths = {};

  for (const operationGroup of model.operationGroups) {
    const operationGroupName = normalizeName(
      getLanguageMetadata(operationGroup.language).name,
      NameType.Interface,
      false
    );
    for (const operation of operationGroup.operations) {
      const operationName = operation.language.default.name;
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
        const path: string = request.protocol.http?.path as string;
        const method = request.protocol.http?.method;

        if (path && method) {
          if (!pathDictionary[path]) {
            pathDictionary[path] = {
              operationGroupName: operationGroupName || "Client",
              description: operationGroup.language.default.description,
              pathParameters,
              methods: {},
              name: operationName
            };
          }
          const hasOptionalOptions = !hasRequiredOptions(operation, model);

          const newMethod: OperationMethod = {
            description: operationDescription,
            optionsName: getOperationOptionsType(operation, importedParameters),
            hasOptionalOptions,
            returnType: getOperationReturnType(
              operation,
              importedResponses,
              clientImports
            ),
            responseTypes: getResponseTypes(operation),
            successStatus: gerOperationSuccessStatus(operation),
            operationName,
            operationHelperDetail: {
              lroDetails: {
                isLongRunning: isLongRunningOperation(operation)
              },
              isPageable: isPagingOperation(operation)
            }
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
        } else {
          throw new Error("ooops");
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
  const paramsName = `${getLanguageMetadata(operation.language).name ||
    getLanguageMetadata(operation.language).serializedName}Parameters`;
  importedParameters.add(paramsName);

  return paramsName;
}

function hasRequiredOptions(operation: Operation, model: CodeModel) {
  const pathParamRequired = (operation.parameters ?? [])
    .filter(
      p =>
        p.protocol.http?.in === ParameterLocation.Uri &&
        model.globalParameters?.indexOf(p) === -1
    )
    .some(p => p.required);
  const otherOptionsRequired = getOperationParameters(operation)
    .filter(p => p.implementation === ImplementationLocation.Method)
    .filter(p => ["query", "body", "headers"].includes(p.protocol.http?.in))
    .some(p => p.required);

  return pathParamRequired || otherOptionsRequired;
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

// function isRequest(item: any): item is Request {
//   return !item.operatioId;
// }

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
