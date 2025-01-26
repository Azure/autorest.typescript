// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Get value 'green-color' from the constant.
 *
 * @summary Get value 'green-color' from the constant.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_getReferencedConstant.json
 */
async function enumGetReferencedConstant(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/enum/ReferencedConstant").get();
  console.log(result);
}

async function main(): Promise<void> {
  await enumGetReferencedConstant();
}

main().catch(console.error);
