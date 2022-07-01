// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
 *
 * @summary Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/enum_getReferenced.json
 */
async function enumGetReferenced() {
  const client = createClient();
  const result = await client.path("/string/enum/Referenced").get();
  console.log(result);
}

enumGetReferenced().catch(console.error);
