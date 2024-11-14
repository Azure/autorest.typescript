// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Create
 *
 * @summary call operation Create
 */
async function todoItemsCreateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/items")
    .post({
      body: {
        item: {
          title: "{Your title}",
          assignedTo: 123,
          description: "{Your description}",
          status: "NotStarted",
          labels: "{Your labels}",
          _dummy: "{Your _dummy}",
        },
        attachments: [
          {
            filename: "{Your filename}",
            mediaType: "{Your mediaType}",
            contents: "{Your contents}",
          },
        ],
      },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  todoItemsCreateSample();
}

main().catch(console.error);
