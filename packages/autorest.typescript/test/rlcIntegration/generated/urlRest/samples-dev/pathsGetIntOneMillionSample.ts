// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetIntOneMillion
 *
 * @summary call operation GetIntOneMillion
 */
async function pathsGetIntOneMillionSample() {
  const client = createUrlRestClient();
  const intPath = undefined;
  const result = await client
    .path("/paths/int/1000000/{intPath}", intPath)
    .get();
  console.log(result);
}

async function main() {
  pathsGetIntOneMillionSample();
}

main().catch(console.error);
