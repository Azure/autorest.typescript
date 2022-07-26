// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient, {
  EnumPutNotExpandableParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 *
 * @summary Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/enum_putNotExpandable.json
 */
async function enumPutNotExpandable() {
  const client = createBodyStringRestClient();
  const options: EnumPutNotExpandableParameters = { body: "red color" };
  const result = await client.path("/string/enum/notExpandable").put(options);
  console.log(result);
}

enumPutNotExpandable().catch(console.error);
