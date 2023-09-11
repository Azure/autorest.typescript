// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get402
 *
 * @summary call operation Get402
 */
async function httpClientFailureGet402Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/402").get();
  console.log(result);
}

async function main() {
  httpClientFailureGet402Sample();
}

main().catch(console.error);
