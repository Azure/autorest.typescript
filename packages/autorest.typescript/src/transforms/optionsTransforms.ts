import { ClientOptions } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";
import { KnownMediaType } from "@azure-tools/codegen";
import { getAutorestOptions } from "../autorestSession";

export async function transformOptions(
  operationGroups: OperationGroupDetails[]
): Promise<ClientOptions> {
  const mediaTypes = getMediaTypesStyles(operationGroups);
  const autorestOptions = getAutorestOptions();

  return {
    // AutorestLevel options
    ...autorestOptions,
    // CalculatedOptions
    mediaTypes,
    hasPaging: hasPagingOperations(operationGroups)
  };
}

/**
 * Gets the MediaTypes based on the different mediaTypes found in a set of operation groups
 * @param operationGroups
 */
function getMediaTypesStyles(operationGroups: OperationGroupDetails[]) {
  return operationGroups.reduce(
    (mediaTypes, operationGroup) =>
      new Set<KnownMediaType>([...mediaTypes, ...operationGroup.mediaTypes]),
    new Set<KnownMediaType>()
  );
}

function hasPagingOperations(operationGroups: OperationGroupDetails[]) {
  return operationGroups.some(og => og.operations.some(o => !!o.pagination));
}
