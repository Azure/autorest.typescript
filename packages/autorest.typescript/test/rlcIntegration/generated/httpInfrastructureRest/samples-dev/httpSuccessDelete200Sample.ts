// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete200
 *
 * @summary call operation Delete200
 */
async function httpSuccessDelete200Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/200").delete();
  console.log(result);
}

async function main() {
  httpSuccessDelete200Sample();
}

main().catch(console.error);
