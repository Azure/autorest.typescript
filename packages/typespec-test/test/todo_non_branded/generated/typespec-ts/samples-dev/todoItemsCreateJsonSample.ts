// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateJson
 *
 * @summary call operation CreateJson
 */
async function todoItemsCreateJsonSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/items")
    .post({
      body: {
        item: {
          id: 123,
          title: "{Your title}",
          ownedBy: 123,
          description: "{Your description}",
          status: "NotStarted",
          labels: ["{Your labels}"],
        },
        attachments: [{ description: "{Your description}", url: "{Your url}" }],
      },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  todoItemsCreateJsonSample();
}

main().catch(console.error);
