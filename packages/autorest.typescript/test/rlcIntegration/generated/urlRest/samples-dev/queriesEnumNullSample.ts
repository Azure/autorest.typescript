// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation EnumNull
 *
 * @summary call operation EnumNull
 */
async function queriesEnumNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/enum/null").get();
  console.log(result);
}

async function main() {
  queriesEnumNullSample();
}

main().catch(console.error);
