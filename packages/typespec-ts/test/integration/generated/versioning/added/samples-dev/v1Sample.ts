// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningAddedClient from "@msinternal/versioning-added";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation V1
 *
 * @summary call operation V1
 */
async function v1Sample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningAddedClient(endpointParam, version);
  const result = await client
    .path("/v1")
    .post({
      body: {
        prop: "{Your prop}",
        enumProp: "enumMemberV1",
        unionProp: "{Your unionProp}",
      },
      headers: { "header-v2": "{Your header-v2}" },
    });
  console.log(result);
}

async function main() {
  v1Sample();
}

main().catch(console.error);
