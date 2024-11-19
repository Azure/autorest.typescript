// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Login
 *
 * @summary call operation Login
 */
async function usersLoginSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/login")
    .post({
      body: { username: "{Your username}", password: "{Your password}" },
    });
  console.log(result);
}

async function main() {
  usersLoginSample();
}

main().catch(console.error);
