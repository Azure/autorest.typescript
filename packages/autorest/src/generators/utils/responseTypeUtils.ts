import { ClientDetails } from "../../models/clientDetails";
import { TypeDetails } from "../../models/modelDetails";
import {
  OperationDetails,
  OperationResponseDetails
} from "../../models/operationDetails";
import { normalizeName, NameType } from "../../utils/nameUtils";
import { getAutorestOptions } from "../../autorestSession";
import { HttpMethod } from "@autorest/codemodel";

/**
 * Helper function that gets a set of object model names,
 * this can be used to check for possible duplicate names
 * while generating other models
 */
export function getAllModelsNames(clientDetails: ClientDetails) {
  return clientDetails.objects.reduce<Set<string>>((acc, { name }) => {
    acc.add(name);
    return acc;
  }, new Set<string>());
}

/**
 * Determines the correct name to use for a response type
 * taking in consideration the already existing object models
 * to avoid name collisions
 * @param responseName The raw response name
 * @param modelNames Set of existing model names
 */
export function getResponseTypeName(
  responseName: string,
  modelNames: Set<string>
) {
  const operationResponseName = normalizeName(responseName, NameType.Interface);

  let typeName = `${operationResponseName}Response`;

  return modelNames.has(typeName)
    ? `${operationResponseName}OperationResponse`
    : typeName;
}

/**
 * Given an Operation, this function finds the response type name and adds it to the imported models.
 * This function checks for a possible model name, or returns the default "RestResponse" type from core-http.
 */
export function getOperationResponseType(
  operation: OperationDetails,
  importedModels: Set<string>,
  modelNames: Set<string>
) {
  const { useCoreV2, headAsBoolean } = getAutorestOptions();

  const hasSuccessResponse = operation.responses.some(
    ({ isError, mappers }) =>
      !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
  );

  const responseName =
    hasSuccessResponse ||
    (operation.requests[0].method === HttpMethod.Head && headAsBoolean)
      ? operation.typeDetails.typeName
      : "";

  if (responseName) {
    const typeName = getResponseTypeName(responseName, modelNames);
    importedModels.add(typeName);
    return typeName;
  }

  return !useCoreV2 ? "coreHttp.RestResponse" : "void";
}

/**
 * This function extracts the body type for pageable operations. This is used to later on
 * be able to return an array of items, instead of the Response objects. This will get the type
 * of the "value" property from the response on a pageable operation.
 */
export function getPagingResponseBodyType(
  operation: OperationDetails
): TypeDetails | undefined {
  const responses = operation.responses
    // Filter responses that are not marked as errors and that have either body or headers
    .filter(
      ({ isError, mappers }) =>
        !isError && (mappers.bodyMapper || mappers.headersMapper)
    );

  if (responses.length > 1 && !hasUniqueMappers(responses)) {
    throw new Error("Handling multiple response types is not yet implemented");
  }

  return responses[0].types.pagingValueType;
}

function hasUniqueMappers(responses: OperationResponseDetails[]): boolean {
  if (!responses.length) {
    throw new Error("Expected responses array to be non-empty");
  }
  const mapper = responses[0].mappers;
  for (const response of responses) {
    if (
      response.mappers.bodyMapper !== mapper.bodyMapper ||
      response.mappers.headersMapper !== mapper.headersMapper
    ) {
      return false;
    }
  }

  return true;
}
