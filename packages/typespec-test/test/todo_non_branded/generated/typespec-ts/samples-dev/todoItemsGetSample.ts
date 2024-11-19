// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function todoItemsGetSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const id = 123;
  const result = await client.path("/items/{id}", id).get();
  console.log(result);
}

async function main() {
  todoItemsGetSample();
}

main().catch(console.error);
