import { SdkClient } from "@azure-tools/typespec-client-generator-core";
import { getNamespaceFullName, listServices } from "@typespec/compiler";
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
      arm: Boolean(dpgContext.arm),
      crossLanguageDefinitionId: `${getNamespaceFullName(
        service.type
      )}.${clientName}`
    };
  });
}

export function isRLCMultiEndpoint(dpgContext: SdkContext): boolean {
  return getRLCClients(dpgContext).length > 1;
}
