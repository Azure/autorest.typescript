// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient, {
  EnumPutReferencedParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 *
 * @summary Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/enum_putReferenced.json
 */
async function enumPutReferenced() {
  const client = createClient();
  const options: EnumPutReferencedParameters = { body: "red color" };
  const result = await client.path("/string/enum/Referenced").put(options);
  console.log(result);
}

enumPutReferenced().catch(console.error);
