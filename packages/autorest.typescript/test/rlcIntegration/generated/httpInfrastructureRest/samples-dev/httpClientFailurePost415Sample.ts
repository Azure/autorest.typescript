// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post415
 *
 * @summary call operation Post415
 */
async function httpClientFailurePost415Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/415").post();
  console.log(result);
}

async function main() {
  httpClientFailurePost415Sample();
}

main().catch(console.error);
