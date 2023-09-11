// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head307
 *
 * @summary call operation Head307
 */
async function httpRedirectsHead307Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/307").head();
  console.log(result);
}

async function main() {
  httpRedirectsHead307Sample();
}

main().catch(console.error);
