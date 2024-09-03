// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ResetPassword
 *
 * @summary call operation ResetPassword
 */
async function usersResetPasswordSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/reset-password")
    .get({ queryParameters: { resetToken: "{Your resetToken}" } });
  console.log(result);
}

async function main() {
  usersResetPasswordSample();
}

main().catch(console.error);
