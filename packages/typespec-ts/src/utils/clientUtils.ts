import {
  SdkClient,
  SdkContext
} from "@azure-tools/typespec-client-generator-core";
import { listServices } from "@typespec/compiler";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const services = listServices(dpgContext.program);

  return services.map(service => {
    return {
      kind: "SdkClient",
      name: service.type.name + "Client",
      service: service.type,
      type: service.type
    }
  });
}
