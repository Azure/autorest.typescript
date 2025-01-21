// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutKitten
 *
 * @summary call operation PutKitten
 */
async function putKittenSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/kitten")
    .put({
      body: {
        name: "{Your name}",
        meows: true,
        hisses: true,
        likesMilk: true,
        eatsMiceYet: true,
      },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  await putKittenSample();
}

main().catch(console.error);
