// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPut201Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put201
 *
 * @summary call operation Put201
 */
async function httpSuccessPut201Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPut201Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/201").put(options);
  console.log(result);
}

async function main() {
  httpSuccessPut201Sample();
}

main().catch(console.error);
