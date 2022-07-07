// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient, {
  StringPutEmptyParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set string value empty ''
 *
 * @summary Set string value empty ''
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putEmpty.json
 */
async function stringPutEmpty() {
  const client = createBodyStringRestClient();
  const options: StringPutEmptyParameters = { body: "" };
  const result = await client.path("/string/empty").put(options);
  console.log(result);
}

stringPutEmpty().catch(console.error);
