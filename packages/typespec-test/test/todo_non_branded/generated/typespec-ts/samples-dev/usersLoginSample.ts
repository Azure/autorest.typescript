// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Login
 *
 * @summary call operation Login
 */
async function usersLoginSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
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
