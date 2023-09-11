// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head501
 *
 * @summary call operation Head501
 */
async function httpServerFailureHead501Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/server/501").head();
  console.log(result);
}

async function main() {
  httpServerFailureHead501Sample();
}

main().catch(console.error);
