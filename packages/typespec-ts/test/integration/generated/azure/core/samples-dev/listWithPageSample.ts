// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient, { paginate } from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListWithPage
 *
 * @summary call operation ListWithPage
 */
async function listWithPageSample() {
  const client = createAzureCoreClient();
  const initialResponse = await client.path("/azure/core/basic/page").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listWithPageSample();
}

main().catch(console.error);
