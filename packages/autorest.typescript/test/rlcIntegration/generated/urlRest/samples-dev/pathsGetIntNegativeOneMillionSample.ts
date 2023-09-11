// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetIntNegativeOneMillion
 *
 * @summary call operation GetIntNegativeOneMillion
 */
async function pathsGetIntNegativeOneMillionSample() {
  const client = createUrlRestClient();
  const intPath = undefined;
  const result = await client
    .path("/paths/int/-1000000/{intPath}", intPath)
    .get();
  console.log(result);
}

async function main() {
  pathsGetIntNegativeOneMillionSample();
}

main().catch(console.error);
