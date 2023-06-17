import {
  SdkClient,
  SdkContext,
  listClients
} from "@azure-tools/typespec-client-generator-core";
import { Namespace } from "@typespec/compiler";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const clientsInSdk = listClients(dpgContext);
  const sdkClientsNamespacesMap = new Map<Namespace, SdkClient[]>();
  const validClients: SdkClient[] = [];
  clientsInSdk.forEach((client) => {
    if (!sdkClientsNamespacesMap.has(client.service)) {
      sdkClientsNamespacesMap.set(client.service, []);
    }
    const clients = sdkClientsNamespacesMap.get(client.service) ?? [];
    clients.push(client);
    sdkClientsNamespacesMap.set(
      client.service,
      clients
    );
  });
  sdkClientsNamespacesMap.forEach((value, service) => {
    if (value.length === 1 && value[0]) {
      // to respect the boundaries that is defined by one @client
      validClients.push(value[0]);
    } else {
      // otherwise use service as the client
      validClients.push({
        kind: "SdkClient",
        name: service.name + "Client",
        service: service,
        type: service
      });
    }
  });
  return validClients;
}
