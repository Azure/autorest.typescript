// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get501
 *
 * @summary call operation Get501
 */
async function httpServerFailureGet501Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/server/501").get();
  console.log(result);
}

async function main() {
  httpServerFailureGet501Sample();
}

main().catch(console.error);
