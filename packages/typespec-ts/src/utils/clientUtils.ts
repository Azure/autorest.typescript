import {
  SdkClient,
  SdkClientType,
  SdkServiceOperation,
  listAllServiceNamespaces
} from "@azure-tools/typespec-client-generator-core";
import { getNamespaceFullName } from "@typespec/compiler";
import { SdkContext } from "./interfaces.js";
import { ModularClientOptions } from "../modular/interfaces.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const services = listAllServiceNamespaces(dpgContext);

  return services.map((service) => {
    const clientName = service.name + "Client";
    return {
      kind: "SdkClient",
      name: clientName,
      service: service,
      type: service,
      arm: Boolean(dpgContext.arm),
      crossLanguageDefinitionId: `${getNamespaceFullName(
        service
      )}.${clientName}`
    };
  });
}

export function isRLCMultiEndpoint(dpgContext: SdkContext): boolean {
  return getRLCClients(dpgContext).length > 1;
}

export function getModularClientOptions(
  clientMap: [string[], SdkClientType<SdkServiceOperation>]
) {
  const [hierarchy, client] = clientMap;
  const clientOptions: ModularClientOptions = {
    rlcClientName: `${client.name.replace("Client", "")}Context`
  };
  clientOptions.subfolder = hierarchy.join("/");
  return clientOptions;
}

export function getClientHierarchyMap(
  context: SdkContext
): Map<string[], SdkClientType<SdkServiceOperation>> {
  const clientMap = new Map<string[], SdkClientType<SdkServiceOperation>>();
  const clients = context.sdkPackage.clients.map((client) => {
    return [
      context.sdkPackage.clients.length > 1
        ? [normalizeName(client.name.replace("Client", ""), NameType.File)]
        : [],
      client
    ];
  }) as [string[], SdkClientType<SdkServiceOperation>][];
  while (clients.length > 0) {
    const [hierarchy, client] = clients.shift()!;
    clientMap.set(hierarchy, client);
    if (client.children && client.children.length > 0) {
      client.children.forEach((child) => {
        const childHierarchy = [
          ...hierarchy,
          normalizeName(child.name.replace("Client", ""), NameType.File)
        ];
        clients.push([childHierarchy, child]);
      });
    }
  }
  return clientMap;
}
