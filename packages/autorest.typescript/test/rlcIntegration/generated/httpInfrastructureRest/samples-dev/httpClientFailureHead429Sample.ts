// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head429
 *
 * @summary call operation Head429
 */
async function httpClientFailureHead429Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/429").head();
  console.log(result);
}

async function main() {
  httpClientFailureHead429Sample();
}

main().catch(console.error);
