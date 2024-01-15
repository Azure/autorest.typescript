// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutCat
 *
 * @summary call operation PutCat
 */
async function putCatSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/cat")
    .put({
      body: { name: "{Your name}", meows: true, hisses: true, likesMilk: true },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  putCatSample();
}

main().catch(console.error);
