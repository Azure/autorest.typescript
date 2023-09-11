// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch302
 *
 * @summary call operation Patch302
 */
async function httpRedirectsPatch302Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/302").patch();
  console.log(result);
}

async function main() {
  httpRedirectsPatch302Sample();
}

main().catch(console.error);
