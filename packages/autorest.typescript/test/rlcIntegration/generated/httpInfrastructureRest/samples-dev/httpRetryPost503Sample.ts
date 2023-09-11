// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post503
 *
 * @summary call operation Post503
 */
async function httpRetryPost503Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/503").post();
  console.log(result);
}

async function main() {
  httpRetryPost503Sample();
}

main().catch(console.error);
