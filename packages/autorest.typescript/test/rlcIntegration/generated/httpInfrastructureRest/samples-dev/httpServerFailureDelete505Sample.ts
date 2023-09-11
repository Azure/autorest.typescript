// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete505
 *
 * @summary call operation Delete505
 */
async function httpServerFailureDelete505Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/server/505").delete();
  console.log(result);
}

async function main() {
  httpServerFailureDelete505Sample();
}

main().catch(console.error);
