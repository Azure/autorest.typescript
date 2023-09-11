// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get502
 *
 * @summary call operation Get502
 */
async function httpRetryGet502Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/502").get();
  console.log(result);
}

async function main() {
  httpRetryGet502Sample();
}

main().catch(console.error);
