// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningRemovedClient from "@msinternal/versioning-removed";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation V2
 *
 * @summary call operation V2
 */
async function v2Sample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningRemovedClient(endpointParam, version);
  const result = await client
    .path("/v2")
    .post({
      body: {
        prop: "{Your prop}",
        enumProp: "enumMemberV2",
        unionProp: "{Your unionProp}",
      },
    });
  console.log(result);
}

async function main() {
  v2Sample();
}

main().catch(console.error);
