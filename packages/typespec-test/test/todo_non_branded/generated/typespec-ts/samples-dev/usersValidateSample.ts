// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Validate
 *
 * @summary call operation Validate
 */
async function usersValidateSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/validate")
    .get({ queryParameters: { token: "{Your token}" } });
  console.log(result);
}

async function main() {
  usersValidateSample();
}

main().catch(console.error);
