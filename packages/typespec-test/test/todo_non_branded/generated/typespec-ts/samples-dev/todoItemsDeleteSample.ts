// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function todoItemsDeleteSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const id = 123;
  const result = await client.path("/items/{id}", id).delete();
  console.log(result);
}

async function main() {
  todoItemsDeleteSample();
}

main().catch(console.error);
