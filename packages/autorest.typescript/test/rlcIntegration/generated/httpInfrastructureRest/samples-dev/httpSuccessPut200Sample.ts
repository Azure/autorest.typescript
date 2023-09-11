// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPut200Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put200
 *
 * @summary call operation Put200
 */
async function httpSuccessPut200Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPut200Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/200").put(options);
  console.log(result);
}

async function main() {
  httpSuccessPut200Sample();
}

main().catch(console.error);
