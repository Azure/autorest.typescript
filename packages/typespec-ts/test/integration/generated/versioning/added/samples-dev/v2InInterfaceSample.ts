// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningAddedClient from "@msinternal/versioning-added";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation V2InInterface
 *
 * @summary call operation V2InInterface
 */
async function v2InInterfaceSample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningAddedClient(endpointParam, version);
  const result = await client
    .path("/interface-v2/v2")
    .post({
      body: {
        prop: "{Your prop}",
        enumProp: "enumMember",
        unionProp: "{Your unionProp}",
      },
    });
  console.log(result);
}

async function main() {
  v2InInterfaceSample();
}

main().catch(console.error);
