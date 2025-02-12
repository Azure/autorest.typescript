// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetCat
 *
 * @summary call operation GetCat
 */
async function getCatSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/cat").get();
  console.log(result);
}

async function main(): Promise<void> {
  await getCatSample();
}

main().catch(console.error);
