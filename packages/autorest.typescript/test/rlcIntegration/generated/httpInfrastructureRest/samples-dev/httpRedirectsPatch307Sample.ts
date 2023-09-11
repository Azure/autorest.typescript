// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch307
 *
 * @summary call operation Patch307
 */
async function httpRedirectsPatch307Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/307").patch();
  console.log(result);
}

async function main() {
  httpRedirectsPatch307Sample();
}

main().catch(console.error);
