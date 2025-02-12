// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation PutFeline
 *
 * @summary call operation PutFeline
 */
async function putFelineSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/feline")
    .put({
      body: { meows: true, hisses: true },
      contentType: "application/json",
    });
  console.log(result);
}

async function main(): Promise<void> {
  await putFelineSample();
}

main().catch(console.error);
