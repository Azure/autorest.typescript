// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch204
 *
 * @summary call operation Patch204
 */
async function httpSuccessPatch204Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/204").patch();
  console.log(result);
}

async function main() {
  httpSuccessPatch204Sample();
}

main().catch(console.error);
