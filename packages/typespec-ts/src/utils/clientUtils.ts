import {
  InitializedByFlags,
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
      )}.${clientName}`,
      subOperationGroups: []
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
): [string[], SdkClientType<SdkServiceOperation>][] {
  const clientMap: [string[], SdkClientType<SdkServiceOperation>][] = [];
  const individualClients = context.sdkPackage.clients.filter((client) => {
    return (
      client.clientInitialization.initializedBy &
      InitializedByFlags.Individually
    );
  });
  const clients = individualClients.map((client) => {
    return [
      context.sdkPackage.clients.length > 1
        ? [normalizeName(client.name.replace("Client", ""), NameType.File)]
        : [],
      client
    ];
  }) as [string[], SdkClientType<SdkServiceOperation>][];
  for (let i = 0; i < clients.length; i++) {
    const [hierarchy, client] = clients[i]!;
    clientMap.push([hierarchy, client]);
    const childIndividualClients = client.children?.filter((client) => {
      return (
        client.clientInitialization.initializedBy &
        InitializedByFlags.Individually
      );
    });
    if (childIndividualClients && childIndividualClients.length > 0) {
      childIndividualClients.forEach((child) => {
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
