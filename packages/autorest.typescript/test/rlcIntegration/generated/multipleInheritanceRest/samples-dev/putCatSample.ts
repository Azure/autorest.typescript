// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation PutCat
 *
 * @summary call operation PutCat
 */
async function putCatSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/cat")
    .put({
      body: { name: "{Your name}", meows: true, hisses: true, likesMilk: true },
      contentType: "application/json",
    });
  console.log(result);
}

async function main(): Promise<void> {
  await putCatSample();
}

main().catch(console.error);
