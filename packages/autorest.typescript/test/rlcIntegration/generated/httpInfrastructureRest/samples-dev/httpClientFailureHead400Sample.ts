// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head400
 *
 * @summary call operation Head400
 */
async function httpClientFailureHead400Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/400").head();
  console.log(result);
}

async function main() {
  httpClientFailureHead400Sample();
}

main().catch(console.error);
