// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete407
 *
 * @summary call operation Delete407
 */
async function httpClientFailureDelete407Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/407").delete();
  console.log(result);
}

async function main() {
  httpClientFailureDelete407Sample();
}

main().catch(console.error);
