// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get300
 *
 * @summary call operation Get300
 */
async function httpRedirectsGet300Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/300").get();
  console.log(result);
}

async function main() {
  httpRedirectsGet300Sample();
}

main().catch(console.error);
