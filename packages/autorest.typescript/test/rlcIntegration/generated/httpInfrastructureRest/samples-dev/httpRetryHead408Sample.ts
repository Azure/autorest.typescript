// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head408
 *
 * @summary call operation Head408
 */
async function httpRetryHead408Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/retry/408").head();
  console.log(result);
}

async function main() {
  httpRetryHead408Sample();
}

main().catch(console.error);
