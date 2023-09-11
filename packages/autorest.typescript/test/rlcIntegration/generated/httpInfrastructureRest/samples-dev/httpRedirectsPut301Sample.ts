// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put301
 *
 * @summary call operation Put301
 */
async function httpRedirectsPut301Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/301").put();
  console.log(result);
}

async function main() {
  httpRedirectsPut301Sample();
}

main().catch(console.error);
