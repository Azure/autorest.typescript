// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningReturnTypeChangedFromClient from "@msinternal/versioning-returnTypeChangedFrom";
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
  const client = createVersioningReturnTypeChangedFromClient(
    endpointParam,
    version,
  );
  const result = await client.path("/test").post({ body: "{Your body}" });
  console.log(result);
}

async function main() {
  testSample();
}

main().catch(console.error);
