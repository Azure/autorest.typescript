// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options412
 *
 * @summary call operation Options412
 */
async function httpClientFailureOptions412Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/412").options();
  console.log(result);
}

async function main() {
  httpClientFailureOptions412Sample();
}

main().catch(console.error);
