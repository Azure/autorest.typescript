// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get307
 *
 * @summary call operation Get307
 */
async function httpRedirectsGet307Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/307").get();
  console.log(result);
}

async function main() {
  httpRedirectsGet307Sample();
}

main().catch(console.error);
