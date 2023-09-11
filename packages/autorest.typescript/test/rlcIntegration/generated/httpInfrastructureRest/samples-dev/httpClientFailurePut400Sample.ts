// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put400
 *
 * @summary call operation Put400
 */
async function httpClientFailurePut400Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/400").put();
  console.log(result);
}

async function main() {
  httpClientFailurePut400Sample();
}

main().catch(console.error);
