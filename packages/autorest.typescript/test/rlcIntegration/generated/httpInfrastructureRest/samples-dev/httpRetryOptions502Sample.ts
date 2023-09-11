// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options502
 *
 * @summary call operation Options502
 */
async function httpRetryOptions502Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/502").options();
  console.log(result);
}

async function main() {
  httpRetryOptions502Sample();
}

main().catch(console.error);
