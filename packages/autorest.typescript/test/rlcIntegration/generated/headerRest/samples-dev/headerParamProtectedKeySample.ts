// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHeaderRestClient, {
  HeaderParamProtectedKeyParameters
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
  const options: HeaderParamProtectedKeyParameters = {
    headers: { "Content-Type": "text/html" }
  };
  const result = await client.path("/header/param/protectedkey").post(options);
  console.log(result);
}

async function main() {
  headerParamProtectedKey();
}

main().catch(console.error);
