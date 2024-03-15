// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function todoItemsDeleteSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const id = 123;
  const result = await client.path("/items/{id}", id).delete();
  console.log(result);
}

async function main() {
  todoItemsDeleteSample();
}

main().catch(console.error);
