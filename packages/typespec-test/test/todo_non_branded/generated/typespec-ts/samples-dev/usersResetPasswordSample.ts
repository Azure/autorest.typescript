// Licensed under the MIT license.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ResetPassword
 *
 * @summary call operation ResetPassword
 */
async function usersResetPasswordSample() {
  const endpoint = "{Your endpoint}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpoint, credential);
  const result = await client
    .path("/reset-password")
    .get({ queryParameters: { resetToken: "{Your resetToken}" } });
  console.log(result);
}

async function main() {
  usersResetPasswordSample();
}

main().catch(console.error);
