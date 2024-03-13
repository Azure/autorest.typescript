// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function todoItemsGetSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const id = 123;
  const result = await client.path("/items/{id}", id).get();
  console.log(result);
}

async function main() {
  todoItemsGetSample();
}

main().catch(console.error);
