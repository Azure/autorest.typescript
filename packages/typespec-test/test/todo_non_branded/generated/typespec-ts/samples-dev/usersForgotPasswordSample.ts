// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ForgotPassword
 *
 * @summary call operation ForgotPassword
 */
async function usersForgotPasswordSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/forgot-password")
    .post({ body: { email: "{Your email}" } });
  console.log(result);
}

async function main() {
  usersForgotPasswordSample();
}

main().catch(console.error);
