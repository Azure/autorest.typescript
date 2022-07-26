// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get String value when no string value is sent in response payload
 *
 * @summary Get String value when no string value is sent in response payload
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getNotProvided.json
 */
async function stringGetNotProvided() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/notProvided").get();
  console.log(result);
}

stringGetNotProvided().catch(console.error);
