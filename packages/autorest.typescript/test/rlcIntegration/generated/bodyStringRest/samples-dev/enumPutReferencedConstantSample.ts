// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient, {
  EnumPutReferencedConstantParameters
} from "@msinternal/body-string-rest";
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
  const options: EnumPutReferencedConstantParameters = {
    body: { ColorConstant: "green-color" }
  };
  const result = await client
    .path("/string/enum/ReferencedConstant")
    .put(options);
  console.log(result);
}

enumPutReferencedConstant().catch(console.error);
