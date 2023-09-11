// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get302
 *
 * @summary call operation Get302
 */
async function httpRedirectsGet302Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/302").get();
  console.log(result);
}

async function main() {
  httpRedirectsGet302Sample();
}

main().catch(console.error);
