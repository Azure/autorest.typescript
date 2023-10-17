// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient, { paginate } from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListWithCustomPageModel
 *
 * @summary call operation ListWithCustomPageModel
 */
async function listWithCustomPageModelSample() {
  const client = createAzureCoreClient();
  const initialResponse = await client
    .path("/azure/core/basic/custom-page")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listWithCustomPageModelSample();
}

main().catch(console.error);
