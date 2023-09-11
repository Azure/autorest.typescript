// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDefaultModelA200None
 *
 * @summary call operation GetDefaultModelA200None
 */
async function multipleResponsesGetDefaultModelA200NoneSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/default/A/response/200/none")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGetDefaultModelA200NoneSample();
}

main().catch(console.error);
