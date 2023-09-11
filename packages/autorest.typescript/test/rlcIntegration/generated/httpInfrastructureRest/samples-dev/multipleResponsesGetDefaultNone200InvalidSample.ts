// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDefaultNone200Invalid
 *
 * @summary call operation GetDefaultNone200Invalid
 */
async function multipleResponsesGetDefaultNone200InvalidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/default/none/response/200/invalid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGetDefaultNone200InvalidSample();
}

main().catch(console.error);
