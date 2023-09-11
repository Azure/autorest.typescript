// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head300
 *
 * @summary call operation Head300
 */
async function httpRedirectsHead300Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/300").head();
  console.log(result);
}

async function main() {
  httpRedirectsHead300Sample();
}

main().catch(console.error);
