import { Host } from "@azure-tools/autorest-extension-base";
import { ClientOptions } from "../models/clientDetails";

export async function transformOptions(host: Host): Promise<ClientOptions> {
  const addCredentials = await host.GetValue("add-credentials");

  return {
    addCredentials
  };
}
