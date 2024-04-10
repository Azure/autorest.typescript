// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionBodyClient from "@msinternal/union-body";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation RequestUnionBody
 *
 * @summary call operation RequestUnionBody
 */
async function requestUnionBodySample() {
  const endpointParam = "{Your endpointParam}";
  const client = createUnionBodyClient(endpointParam);
  const result = await client
    .path("/request-union-body")
    .post({ body: { payMethod: "01" } });
  console.log(result);
}

async function main() {
  requestUnionBodySample();
}

main().catch(console.error);
