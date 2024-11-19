// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Update
 *
 * @summary call operation Update
 */
async function todoItemsUpdateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
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
