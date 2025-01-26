// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 *
 * @summary Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_putReferenced.json
 */
async function enumPutReferenced(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client
    .path("/string/enum/Referenced")
    .put({ body: "red color" });
  console.log(result);
}

async function main(): Promise<void> {
  await enumPutReferenced();
}

main().catch(console.error);
