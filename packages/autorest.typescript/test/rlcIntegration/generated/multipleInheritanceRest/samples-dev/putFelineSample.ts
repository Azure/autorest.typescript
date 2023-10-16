// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMultipleInheritanceRestClient, {
  PutFelineParameters
} from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutFeline
 *
 * @summary call operation PutFeline
 */
async function putFelineSample() {
  const client = createMultipleInheritanceRestClient();
  const options = {
    body: { meows: true, hisses: true },
    contentType: "application/json"
  };
  const result = await client.path("/multipleInheritance/feline").put(options);
  console.log(result);
}

async function main() {
  putFelineSample();
}

main().catch(console.error);
