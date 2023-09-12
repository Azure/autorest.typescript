// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient, {
  PutCatParameters
} from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutCat
 *
 * @summary call operation PutCat
 */
async function putCatSample() {
  const client = createMultipleInheritanceRestClient();
  const options: PutCatParameters = {
    body: { likesMilk: true, name: '{Your "name"}', meows: true, hisses: true },
    contentType: "application/json"
  };
  const result = await client.path("/multipleInheritance/cat").put(options);
  console.log(result);
}

async function main() {
  putCatSample();
}

main().catch(console.error);
