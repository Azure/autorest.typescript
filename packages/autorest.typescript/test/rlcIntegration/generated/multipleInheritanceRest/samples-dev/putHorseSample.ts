// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation PutHorse
 *
 * @summary call operation PutHorse
 */
async function putHorseSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/horse")
    .put({
      body: { name: "{Your name}", isAShowHorse: true },
      contentType: "application/json",
    });
  console.log(result);
}

async function main(): Promise<void> {
  await putHorseSample();
}

main().catch(console.error);
