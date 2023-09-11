// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200Model204NoModelDefaultError400Valid
 *
 * @summary call operation Get200Model204NoModelDefaultError400Valid
 */
async function multipleResponsesGet200Model204NoModelDefaultError400ValidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/200/A/204/none/default/Error/response/400/valid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet200Model204NoModelDefaultError400ValidSample();
}

main().catch(console.error);
