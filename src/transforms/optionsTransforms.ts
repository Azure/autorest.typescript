import { Host } from "@azure-tools/autorest-extension-base";
import { ClientOptions } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";
import { KnownMediaType } from "@azure-tools/codegen";

export async function transformOptions(
  host: Host,
  operationGroups: OperationGroupDetails[]
): Promise<ClientOptions> {
  const serializationStyles = getSerializationStyles(operationGroups);
  const addCredentials = !((await host.GetValue("add-credentials")) === false);

  return {
    addCredentials,
    serializationStyles
  };
}

/**
 * Gets the SerializationStyles based on the different mediaTypes found in a set of operation groups
 * @param operationGroups
 */
function getSerializationStyles(operationGroups: OperationGroupDetails[]) {
  return operationGroups.reduce(
    (styles, op) =>
      new Set<KnownMediaType>([...styles, ...op.serializationStyles]),
    new Set<KnownMediaType>()
  );
}
