// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sends value 'green-color' from a constant
 *
 * @summary Sends value 'green-color' from a constant
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_putReferencedConstant.json
 */
async function enumPutReferencedConstant() {
  const client = createBodyStringRestClient();
  const result = await client
    .path("/string/enum/ReferencedConstant")
    .put({ body: { ColorConstant: "green-color" } });
  console.log(result);
}

async function main() {
  enumPutReferencedConstant();
}

main().catch(console.error);
