// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ForgotPassword
 *
 * @summary call operation ForgotPassword
 */
async function usersForgotPasswordSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/forgot-password")
    .post({ body: { email: "{Your email}" } });
  console.log(result);
}

async function main() {
  usersForgotPasswordSample();
}

main().catch(console.error);
