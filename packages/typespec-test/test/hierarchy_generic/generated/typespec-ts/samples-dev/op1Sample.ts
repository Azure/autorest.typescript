// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooClient } from "@msinternal/hierarchy-generic";

/**
 * This sample demonstrates how to undefined
 *
 * @summary undefined
 * x-ms-original-file: op1.json
 */
async function optop() {
  const client = new FooClient();
  const result = await client.op1({
    prop1: "00000000-0000-0000-0000-00000000000",
  });
  console.log(result);
}

async function main() {
  optop();
}

main().catch(console.error);
