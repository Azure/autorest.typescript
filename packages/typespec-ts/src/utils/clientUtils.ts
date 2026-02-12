import {
  InitializedByFlags,
  SdkClient,
  SdkClientType,
  SdkServiceOperation,
  listAllServiceNamespaces,
  listClients
} from "@azure-tools/typespec-client-generator-core";
import {
  getNamespaceFullName,
  Interface,
  isTemplateDeclaration,
  isTemplateDeclarationOrInstance,
  Namespace,
  Operation
} from "@typespec/compiler";
import { SdkContext } from "./interfaces.js";
import { ModularClientOptions } from "../modular/interfaces.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";

export function getRLCClients(
  dpgContext: SdkContext,
  isModularLibrary?: boolean
): SdkClient[] {
  const modular =
    isModularLibrary ?? dpgContext.rlcOptions?.isModularLibrary ?? false;
  const clients = listClients(dpgContext);
  const rawServiceNamespaces =
    dpgContext.allServiceNamespaces ?? listAllServiceNamespaces(dpgContext);

  // For one client in Modular: Return the client from listClients with multi-service support
  if (modular && clients.length === 1) {
    return clients.map((client) => {
      const services = client.services;
      return {
        ...client,
        services: services,
        crossLanguageDefinitionId: `${getNamespaceFullName(
          services[0]!
        )}.${client.name}`
      };
    });
  } else {
    // For RLC and multiple clients in Modular:
    // Flatten all services and return one client per service
    const services = new Set<Namespace>();
    clients.forEach((c) => {
      const clientService = c.services;
      clientService.forEach((ns) => services.add(ns));
    });

    if (services.size > 0) {
      return [...services.values()].map((service) => {
        const clientName = service.name + "Client";
        return {
          kind: "SdkClient",
          name: clientName,
          service: service,
          type: service,
          services: [service],
          arm: Boolean(dpgContext.arm),
          crossLanguageDefinitionId: `${getNamespaceFullName(
            service
          )}.${clientName}`,
          subOperationGroups: []
        };
      });
    }
  }

  // Fallback to raw service namespaces if no clients found
  return rawServiceNamespaces.map((service) => {
    const clientName = service.name + "Client";
    return {
      kind: "SdkClient",
      name: clientName,
      service: service,
      type: service,
      services: [service],
      arm: Boolean(dpgContext.arm),
      crossLanguageDefinitionId: `${getNamespaceFullName(
        service
      )}.${clientName}`,
      subOperationGroups: []
    };
  });
}

export function listOperationsUnderRLCClient(client: SdkClient): Operation[] {
  const operations = [];
  const serviceArray = client.services;
  const queue: (Namespace | Interface)[] = [...serviceArray];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (
      current.decorators.some(
        (d) =>
          d.definition?.name === "@client" &&
          getNamespaceFullName(d.definition?.namespace) ===
            "Azure.ClientGenerator.Core"
      ) &&
      !serviceArray.includes(current as Namespace)
    ) {
      continue;
    }
    operations.push(
      ...[...current.operations.values()].filter(
        (op) => isTemplateDeclarationOrInstance(op) === false
      )
    );
    if (current.kind === "Namespace") {
      queue.push(...current.namespaces.values());
      queue.push(
        ...[...current.interfaces.values()].filter(
          (i) => isTemplateDeclaration(i) === false
        )
      );
    }
  }
  return operations;
}

export function isRLCMultiEndpoint(dpgContext: SdkContext): boolean {
  return getRLCClients(dpgContext).length > 1;
}

export function getModularClientOptions(
  clientMap: [string[], SdkClientType<SdkServiceOperation>]
) {
  const [hierarchy, client] = clientMap;
  const clientOptions: ModularClientOptions = {
    rlcClientName: `${client.name.replace(/Client$/, "")}Context`
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
      client.clientInitialization.initializedBy > 0 &&
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
        client.clientInitialization.initializedBy > 0 &&
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
