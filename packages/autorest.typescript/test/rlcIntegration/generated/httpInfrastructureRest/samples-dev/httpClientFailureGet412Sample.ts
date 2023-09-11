// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get412
 *
 * @summary call operation Get412
 */
async function httpClientFailureGet412Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/412").get();
  console.log(result);
}

async function main() {
  httpClientFailureGet412Sample();
}

main().catch(console.error);
