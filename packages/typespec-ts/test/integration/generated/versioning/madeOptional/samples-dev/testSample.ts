// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningMadeOptionalClient from "@msinternal/versioning-madeOptional";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Test
 *
 * @summary call operation Test
 */
async function testSample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningMadeOptionalClient(endpointParam, version);
  const result = await client
    .path("/test")
    .post({
      body: { prop: "{Your prop}", changedProp: "{Your changedProp}" },
      queryParameters: { param: "{Your param}" },
    });
  console.log(result);
}

async function main() {
  testSample();
}

main().catch(console.error);
