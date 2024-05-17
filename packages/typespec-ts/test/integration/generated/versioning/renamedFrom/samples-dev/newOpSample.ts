// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningRenamedFromClient from "@msinternal/versioning-renamedFrom";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NewOp
 *
 * @summary call operation NewOp
 */
async function newOpSample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningRenamedFromClient(endpointParam, version);
  const result = await client
    .path("/test")
    .post({
      body: {
        newProp: "{Your newProp}",
        enumProp: "newEnumMember",
        unionProp: "{Your unionProp}",
      },
      queryParameters: { newQuery: "{Your newQuery}" },
    });
  console.log(result);
}

async function main() {
  newOpSample();
}

main().catch(console.error);
