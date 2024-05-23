// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningRenamedFromClient from "@msinternal/versioning-renamedFrom";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NewOpInNewInterface
 *
 * @summary call operation NewOpInNewInterface
 */
async function newOpInNewInterfaceSample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningRenamedFromClient(endpointParam, version);
  const result = await client
    .path("/interface/test")
    .post({
      body: {
        newProp: "{Your newProp}",
        enumProp: "newEnumMember",
        unionProp: "{Your unionProp}",
      },
    });
  console.log(result);
}

async function main() {
  newOpInNewInterfaceSample();
}

main().catch(console.error);
