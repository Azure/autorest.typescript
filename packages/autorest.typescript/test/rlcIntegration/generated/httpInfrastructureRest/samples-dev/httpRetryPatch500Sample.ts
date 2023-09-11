// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch500
 *
 * @summary call operation Patch500
 */
async function httpRetryPatch500Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/500").patch();
  console.log(result);
}

async function main() {
  httpRetryPatch500Sample();
}

main().catch(console.error);
