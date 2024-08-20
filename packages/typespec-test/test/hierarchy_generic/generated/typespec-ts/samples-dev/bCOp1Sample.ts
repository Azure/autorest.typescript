// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooClient } from "@msinternal/hierarchy-generic";

/**
 * This sample demonstrates how to undefined
 *
 * @summary undefined
 * x-ms-original-file: cOp1.json
 */
async function cOp1() {
  const client = new FooClient();
  const result = await client.b.c.op1({
    prop2: "00000000-0000-0000-0000-00000000000",
  });
  console.log(result);
}

async function main() {
  cOp1();
}

main().catch(console.error);
