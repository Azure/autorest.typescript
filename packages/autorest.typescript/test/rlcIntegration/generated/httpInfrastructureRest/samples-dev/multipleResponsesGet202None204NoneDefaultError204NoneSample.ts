// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get202None204NoneDefaultError204None
 *
 * @summary call operation Get202None204NoneDefaultError204None
 */
async function multipleResponsesGet202None204NoneDefaultError204NoneSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/202/none/204/none/default/Error/response/204/none")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet202None204NoneDefaultError204NoneSample();
}

main().catch(console.error);
