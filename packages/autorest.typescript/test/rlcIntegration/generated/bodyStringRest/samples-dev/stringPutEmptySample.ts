// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Set string value empty ''
 *
 * @summary Set string value empty ''
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putEmpty.json
 */
async function stringPutEmpty(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/empty").put({ body: "" });
  console.log(result);
}

async function main(): Promise<void> {
  await stringPutEmpty();
}

main().catch(console.error);
