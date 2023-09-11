// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options400
 *
 * @summary call operation Options400
 */
async function httpClientFailureOptions400Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/400").options();
  console.log(result);
}

async function main() {
  httpClientFailureOptions400Sample();
}

main().catch(console.error);
