// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetFeline
 *
 * @summary call operation GetFeline
 */
async function getFelineSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/feline").get();
  console.log(result);
}

async function main() {
  await getFelineSample();
}

main().catch(console.error);
