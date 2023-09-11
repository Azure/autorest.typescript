// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetEmptyError
 *
 * @summary call operation GetEmptyError
 */
async function httpFailureGetEmptyErrorSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/emptybody/error").get();
  console.log(result);
}

async function main() {
  httpFailureGetEmptyErrorSample();
}

main().catch(console.error);
