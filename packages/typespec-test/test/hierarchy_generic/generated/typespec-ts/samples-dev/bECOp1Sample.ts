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
  const result = await client.b.e.c.op1({});
  console.log(result);
}

async function main() {
  cOp1();
}

main().catch(console.error);
