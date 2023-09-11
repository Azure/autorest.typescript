// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put204
 *
 * @summary call operation Put204
 */
async function httpSuccessPut204Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/204").put();
  console.log(result);
}

async function main() {
  httpSuccessPut204Sample();
}

main().catch(console.error);
