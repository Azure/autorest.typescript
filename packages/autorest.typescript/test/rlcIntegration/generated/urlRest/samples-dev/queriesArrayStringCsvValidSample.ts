// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringCsvValid
 *
 * @summary call operation ArrayStringCsvValid
 */
async function queriesArrayStringCsvValidSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/csv/string/valid").get();
  console.log(result);
}

async function main() {
  queriesArrayStringCsvValidSample();
}

main().catch(console.error);
