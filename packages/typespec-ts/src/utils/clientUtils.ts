import {
  SdkClient,
  SdkContext,
  listClients
} from "@azure-tools/typespec-client-generator-core";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const clientsInSdk = listClients(dpgContext);
  // to respect the boundaries that is defined by one @client
  if (clientsInSdk.length === 1) {
    return clientsInSdk;
  }
  
  // Otherwise use service as the client
  const services = listServices(context.program);

  return services.map((service) => {
    const clientName = service.type.name + "Client";
    return {
      kind: "SdkClient",
      name: clientName,
      service: service.type,
      type: service.type,
    };
  });
}
