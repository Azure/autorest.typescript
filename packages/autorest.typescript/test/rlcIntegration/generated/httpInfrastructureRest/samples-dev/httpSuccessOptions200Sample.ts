// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options200
 *
 * @summary call operation Options200
 */
async function httpSuccessOptions200Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/200").options();
  console.log(result);
}

async function main() {
  httpSuccessOptions200Sample();
}

main().catch(console.error);
