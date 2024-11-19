// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createHeaderRestClient from "@msinternal/header-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2
 *
 * @summary Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramInteger.json
 */
async function headerParamInteger() {
  const client = createHeaderRestClient();
  const result = await client
    .path("/header/param/prim/integer")
    .post({ headers: { scenario: "positive", value: 1 } });
  console.log(result);
}

async function main() {
  headerParamInteger();
}

main().catch(console.error);
