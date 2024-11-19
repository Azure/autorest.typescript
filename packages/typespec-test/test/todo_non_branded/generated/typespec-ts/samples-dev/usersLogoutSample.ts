// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Logout
 *
 * @summary call operation Logout
 */
async function usersLogoutSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client.path("/logout").get();
  console.log(result);
}

async function main() {
  usersLogoutSample();
}

main().catch(console.error);
