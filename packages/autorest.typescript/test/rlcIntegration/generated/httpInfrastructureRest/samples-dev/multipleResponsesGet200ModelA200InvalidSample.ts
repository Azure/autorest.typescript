// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200ModelA200Invalid
 *
 * @summary call operation Get200ModelA200Invalid
 */
async function multipleResponsesGet200ModelA200InvalidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/200/A/response/200/invalid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet200ModelA200InvalidSample();
}

main().catch(console.error);
