// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHeaderRestClient, {
  ParamProtectedKeyParameters
} from "@msinternal/header-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Send a post request with header value "Content-Type": "text/html"
 *
 * @summary Send a post request with header value "Content-Type": "text/html"
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramProtectedKey.json
 */
async function headerParamProtectedKey() {
  const client = createHeaderRestClient();
  const options: ParamProtectedKeyParameters = {
    headers: { "Content-Type": "text/html" }
  };
  const result = await client.path("/header/param/protectedkey").post(options);
  console.log(result);
}

headerParamProtectedKey().catch(console.error);
