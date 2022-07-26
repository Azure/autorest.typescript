// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get value 'green-color' from the constant.
 *
 * @summary Get value 'green-color' from the constant.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_getReferencedConstant.json
 */
async function enumGetReferencedConstant() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/enum/ReferencedConstant").get();
  console.log(result);
}

enumGetReferencedConstant().catch(console.error);
