import { Host } from "@azure-tools/autorest-extension-base";
import { ClientOptions } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";
import { KnownMediaType } from "@azure-tools/codegen";

export async function transformOptions(
  host: Host,
  operationGroups: OperationGroupDetails[]
): Promise<ClientOptions> {
  const mediaTypes = getMediaTypesStyles(operationGroups);
  const addCredentials = !((await host.GetValue("add-credentials")) === false);

  return {
    addCredentials,
    mediaTypes
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
