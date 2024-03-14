// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Create
 *
 * @summary call operation Create
 */
async function usersCreateSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/users")
    .post({
      body: {
        user: {
          username: "{Your username}",
          email: "{Your email}",
          password: "{Your password}",
        },
      },
    });
  console.log(result);
}

async function main() {
  usersCreateSample();
}

main().catch(console.error);
