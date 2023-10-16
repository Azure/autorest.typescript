// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMultipleInheritanceRestClient, {
  PutKittenParameters
} from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutKitten
 *
 * @summary call operation PutKitten
 */
async function putKittenSample() {
  const client = createMultipleInheritanceRestClient();
  const options = {
    body: {
      name: "{Your name}",
      meows: true,
      hisses: true,
      likesMilk: true,
      eatsMiceYet: true
    },
    contentType: "application/json"
  };
  const result = await client.path("/multipleInheritance/kitten").put(options);
  console.log(result);
}

async function main() {
  putKittenSample();
}

main().catch(console.error);
