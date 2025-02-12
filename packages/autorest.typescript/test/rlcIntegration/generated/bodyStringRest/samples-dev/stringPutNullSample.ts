// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Set string value null
 *
 * @summary Set string value null
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putNull.json
 */
async function stringPutNull(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/null").put();
  console.log(result);
}

async function main(): Promise<void> {
  await stringPutNull();
}

main().catch(console.error);
