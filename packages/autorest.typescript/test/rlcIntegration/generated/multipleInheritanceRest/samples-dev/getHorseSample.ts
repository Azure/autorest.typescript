// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetHorse
 *
 * @summary call operation GetHorse
 */
async function getHorseSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/horse").get();
  console.log(result);
}

async function main(): Promise<void> {
  await getHorseSample();
}

main().catch(console.error);
