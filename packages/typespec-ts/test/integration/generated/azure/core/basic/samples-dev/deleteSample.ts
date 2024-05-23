// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function deleteSample() {
  const client = createAzureCoreClient();
  const id = 123;
  const result = await client.path("/azure/core/basic/users/{id}", id).delete();
  console.log(result);
}

async function main() {
  deleteSample();
}

main().catch(console.error);
