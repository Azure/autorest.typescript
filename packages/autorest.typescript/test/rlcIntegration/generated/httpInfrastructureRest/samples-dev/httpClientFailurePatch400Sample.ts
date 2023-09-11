// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch400
 *
 * @summary call operation Patch400
 */
async function httpClientFailurePatch400Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/400").patch();
  console.log(result);
}

async function main() {
  httpClientFailurePatch400Sample();
}

main().catch(console.error);
