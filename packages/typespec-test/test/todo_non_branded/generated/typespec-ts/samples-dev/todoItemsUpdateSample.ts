// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Update
 *
 * @summary call operation Update
 */
async function todoItemsUpdateSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const id = 123;
  const result = await client
    .path("/items/{id}", id)
    .patch({
      body: {
        patch: {
          title: "{Your title}",
          ownedBy: 123,
          description: "{Your description}",
          status: "NotStarted",
        },
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  todoItemsUpdateSample();
}

main().catch(console.error);
