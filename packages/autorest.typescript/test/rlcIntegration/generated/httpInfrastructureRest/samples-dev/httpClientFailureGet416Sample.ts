// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get416
 *
 * @summary call operation Get416
 */
async function httpClientFailureGet416Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/416").get();
  console.log(result);
}

async function main() {
  httpClientFailureGet416Sample();
}

main().catch(console.error);
