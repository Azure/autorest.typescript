// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch504
 *
 * @summary call operation Patch504
 */
async function httpRetryPatch504Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/504").patch();
  console.log(result);
}

async function main() {
  httpRetryPatch504Sample();
}

main().catch(console.error);
