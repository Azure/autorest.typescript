// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringCsvEmpty
 *
 * @summary call operation ArrayStringCsvEmpty
 */
async function queriesArrayStringCsvEmptySample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/csv/string/empty").get();
  console.log(result);
}

async function main() {
  queriesArrayStringCsvEmptySample();
}

main().catch(console.error);
