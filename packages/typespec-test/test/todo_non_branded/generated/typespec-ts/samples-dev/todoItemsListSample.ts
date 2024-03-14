// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation List
 *
 * @summary call operation List
 */
async function todoItemsListSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/items")
    .get({ queryParameters: { limit: 123, offset: 123 } });
  console.log(result);
}

async function main() {
  todoItemsListSample();
}

main().catch(console.error);
