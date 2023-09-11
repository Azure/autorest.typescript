// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200Model204NoModelDefaultError200Valid
 *
 * @summary call operation Get200Model204NoModelDefaultError200Valid
 */
async function multipleResponsesGet200Model204NoModelDefaultError200ValidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/200/A/204/none/default/Error/response/200/valid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet200Model204NoModelDefaultError200ValidSample();
}

main().catch(console.error);
