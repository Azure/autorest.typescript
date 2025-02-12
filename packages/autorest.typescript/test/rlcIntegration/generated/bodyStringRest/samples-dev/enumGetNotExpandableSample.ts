// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
 *
 * @summary Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_getNotExpandable.json
 */
async function enumGetNotExpandable(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/enum/notExpandable").get();
  console.log(result);
}

async function main(): Promise<void> {
  await enumGetNotExpandable();
}

main().catch(console.error);
