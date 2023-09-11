// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Options307
 *
 * @summary call operation Options307
 */
async function httpRedirectsOptions307Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/307").options();
  console.log(result);
}

async function main() {
  httpRedirectsOptions307Sample();
}

main().catch(console.error);
