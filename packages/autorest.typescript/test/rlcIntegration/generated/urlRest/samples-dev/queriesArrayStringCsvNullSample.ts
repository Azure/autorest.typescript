// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringCsvNull
 *
 * @summary call operation ArrayStringCsvNull
 */
async function queriesArrayStringCsvNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/csv/string/null").get();
  console.log(result);
}

async function main() {
  queriesArrayStringCsvNullSample();
}

main().catch(console.error);
