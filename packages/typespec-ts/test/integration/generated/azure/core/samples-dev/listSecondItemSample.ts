// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient, { paginate } from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListSecondItem
 *
 * @summary call operation ListSecondItem
 */
async function listSecondItemSample() {
  const client = createAzureCoreClient();
  const initialResponse = await client
    .path("/azure/core/basic/second-item")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listSecondItemSample();
}

main().catch(console.error);
