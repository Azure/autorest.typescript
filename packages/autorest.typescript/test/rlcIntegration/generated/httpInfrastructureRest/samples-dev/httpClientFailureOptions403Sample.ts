// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options403
 *
 * @summary call operation Options403
 */
async function httpClientFailureOptions403Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/403").options();
  console.log(result);
}

async function main() {
  httpClientFailureOptions403Sample();
}

main().catch(console.error);
