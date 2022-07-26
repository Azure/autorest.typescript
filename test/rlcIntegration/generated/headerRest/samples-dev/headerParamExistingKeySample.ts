// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHeaderRestClient, {
  ParamExistingKeyParameters
} from "@msinternal/header-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Send a post request with header value "User-Agent": "overwrite"
 *
 * @summary Send a post request with header value "User-Agent": "overwrite"
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramExistingKey.json
 */
async function headerParamExistingKey() {
  const client = createHeaderRestClient();
  const options: ParamExistingKeyParameters = {
    headers: { "User-Agent": "overwrite" }
  };
  const result = await client.path("/header/param/existingkey").post(options);
  console.log(result);
}

headerParamExistingKey().catch(console.error);
