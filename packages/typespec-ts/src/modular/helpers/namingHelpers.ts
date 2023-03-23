import { Client } from "../modularCodeModel.js";

export function getClientName(client: Client) {
  return client.name.replace(/Client$/, "");
}
