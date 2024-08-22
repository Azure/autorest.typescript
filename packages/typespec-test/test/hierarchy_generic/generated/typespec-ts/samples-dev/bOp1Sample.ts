// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooClient } from "@msinternal/hierarchy-generic";

/**
 * This sample demonstrates how to undefined
 *
 * @summary undefined
 * x-ms-original-file: bOp1.json
 */
async function bOpeS() {
  const client = new FooClient();
  const result = await client.b.op1({
    prop2: "00000000-0000-0000-0000-00000000000",
  });
  console.log(result);
}

async function main() {
  bOpeS();
}

main().catch(console.error);
