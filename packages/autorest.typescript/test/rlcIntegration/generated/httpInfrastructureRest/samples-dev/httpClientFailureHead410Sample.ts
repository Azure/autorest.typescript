// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head410
 *
 * @summary call operation Head410
 */
async function httpClientFailureHead410Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/410").head();
  console.log(result);
}

async function main() {
  httpClientFailureHead410Sample();
}

main().catch(console.error);
