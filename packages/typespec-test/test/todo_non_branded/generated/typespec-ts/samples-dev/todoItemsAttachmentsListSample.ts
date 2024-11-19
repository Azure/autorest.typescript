// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation List
 *
 * @summary call operation List
 */
async function todoItemsAttachmentsListSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const itemId = 123;
  const result = await client.path("/items/{itemId}/attachments", itemId).get();
  console.log(result);
}

async function main() {
  todoItemsAttachmentsListSample();
}

main().catch(console.error);
