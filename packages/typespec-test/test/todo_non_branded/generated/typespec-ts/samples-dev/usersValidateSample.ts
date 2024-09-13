// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Validate
 *
 * @summary call operation Validate
 */
async function usersValidateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/validate")
    .get({ queryParameters: { token: "{Your token}" } });
  console.log(result);
}

async function main() {
  usersValidateSample();
}

main().catch(console.error);
