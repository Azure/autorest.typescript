// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDefaultNone200None
 *
 * @summary call operation GetDefaultNone200None
 */
async function multipleResponsesGetDefaultNone200NoneSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/default/none/response/200/none")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGetDefaultNone200NoneSample();
}

main().catch(console.error);
