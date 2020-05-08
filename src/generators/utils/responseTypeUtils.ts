import { ClientDetails } from "../../models/clientDetails";
import { normalizeName, NameType } from "../../utils/nameUtils";

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
