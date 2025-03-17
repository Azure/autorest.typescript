// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createHeaderRestClient from "@msinternal/header-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2
 *
 * @summary Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramInteger.json
 */
async function headerParamInteger(): Promise<void> {
  const client = createHeaderRestClient();
  const result = await client
    .path("/header/param/prim/integer")
    .post({ headers: { scenario: "positive", value: 1 } });
  console.log(result);
}

async function main(): Promise<void> {
  await headerParamInteger();
}

main().catch(console.error);
