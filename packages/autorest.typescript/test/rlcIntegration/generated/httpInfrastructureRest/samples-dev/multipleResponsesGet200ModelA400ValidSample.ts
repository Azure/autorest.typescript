// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200ModelA400Valid
 *
 * @summary call operation Get200ModelA400Valid
 */
async function multipleResponsesGet200ModelA400ValidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/200/A/response/400/valid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet200ModelA400ValidSample();
}

main().catch(console.error);
