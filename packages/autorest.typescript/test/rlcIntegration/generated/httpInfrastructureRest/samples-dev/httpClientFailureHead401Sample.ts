// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head401
 *
 * @summary call operation Head401
 */
async function httpClientFailureHead401Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/401").head();
  console.log(result);
}

async function main() {
  httpClientFailureHead401Sample();
}

main().catch(console.error);
