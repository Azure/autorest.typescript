import {
  SdkClient,
  SdkContext,
  listClients
} from "@azure-tools/typespec-client-generator-core";

export function getRLCClients(dpgContext: SdkContext): SdkClient[] {
  const clientsInSdk = listClients(dpgContext);
  const clients = listClients(dpgContext, false);
  // to respect the boundaries that is defined by one @client
  if (clientsInSdk.length === 1) {
    return clientsInSdk;
  }
  // return the original @service clients
  return clients;
}
