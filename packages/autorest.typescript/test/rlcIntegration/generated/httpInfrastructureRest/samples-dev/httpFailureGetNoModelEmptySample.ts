// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetNoModelEmpty
 *
 * @summary call operation GetNoModelEmpty
 */
async function httpFailureGetNoModelEmptySample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/nomodel/empty").get();
  console.log(result);
}

async function main() {
  httpFailureGetNoModelEmptySample();
}

main().catch(console.error);
