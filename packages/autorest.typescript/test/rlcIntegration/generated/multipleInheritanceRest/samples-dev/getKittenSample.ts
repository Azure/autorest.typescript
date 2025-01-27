// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetKitten
 *
 * @summary call operation GetKitten
 */
async function getKittenSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/kitten").get();
  console.log(result);
}

async function main(): Promise<void> {
  await getKittenSample();
}

main().catch(console.error);
