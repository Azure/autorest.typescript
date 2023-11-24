import { SdkClient } from "@azure-tools/typespec-client-generator-core";
import {
  Namespace,
  getNamespaceFullName,
  listServices
} from "@typespec/compiler";
import { SdkContext } from "./interfaces.js";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const services = listServices(dpgContext.program);

  return services.map((service) => {
    const clientName = service.type.name + "Client";
    return {
      kind: "SdkClient",
      name: clientName,
      service: service.type,
      type: service.type,
      arm: isArm(service.type),
      crossLanguageDefinitionId: `${getNamespaceFullName(
        service.type
      )}.${clientName}`
    };
  });
}

function isArm(service: Namespace): boolean {
  return service.decorators.some(
    (decorator) => decorator.decorator.name === "$armProviderNamespace"
  );
}

export function isRLCMultiEndpoint(dpgContext: SdkContext): boolean {
  return getRLCClients(dpgContext).length > 1;
}
