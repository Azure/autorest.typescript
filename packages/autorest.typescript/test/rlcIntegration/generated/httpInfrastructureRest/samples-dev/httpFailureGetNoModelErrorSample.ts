// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetNoModelError
 *
 * @summary call operation GetNoModelError
 */
async function httpFailureGetNoModelErrorSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/nomodel/error").get();
  console.log(result);
}

async function main() {
  httpFailureGetNoModelErrorSample();
}

main().catch(console.error);
