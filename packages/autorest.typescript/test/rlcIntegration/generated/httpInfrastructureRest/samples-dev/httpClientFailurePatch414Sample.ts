// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch414
 *
 * @summary call operation Patch414
 */
async function httpClientFailurePatch414Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/414").patch();
  console.log(result);
}

async function main() {
  httpClientFailurePatch414Sample();
}

main().catch(console.error);
