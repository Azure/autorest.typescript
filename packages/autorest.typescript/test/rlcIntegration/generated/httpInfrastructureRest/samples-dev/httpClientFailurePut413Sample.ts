// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put413
 *
 * @summary call operation Put413
 */
async function httpClientFailurePut413Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/413").put();
  console.log(result);
}

async function main() {
  httpClientFailurePut413Sample();
}

main().catch(console.error);
