// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete503
 *
 * @summary call operation Delete503
 */
async function httpRetryDelete503Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/503").delete();
  console.log(result);
}

async function main() {
  httpRetryDelete503Sample();
}

main().catch(console.error);
