// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Logout
 *
 * @summary call operation Logout
 */
async function usersLogoutSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client.path("/logout").get();
  console.log(result);
}

async function main() {
  usersLogoutSample();
}

main().catch(console.error);
