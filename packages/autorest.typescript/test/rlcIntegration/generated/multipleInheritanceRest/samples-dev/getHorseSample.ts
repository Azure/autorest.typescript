// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetHorse
 *
 * @summary call operation GetHorse
 */
async function getHorseSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/horse").get();
  console.log(result);
}

async function main() {
  getHorseSample();
}

main().catch(console.error);
