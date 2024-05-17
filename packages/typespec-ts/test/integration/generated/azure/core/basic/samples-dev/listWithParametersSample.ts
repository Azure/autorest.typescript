// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient, { paginate } from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListWithParameters
 *
 * @summary call operation ListWithParameters
 */
async function listWithParametersSample() {
  const client = createAzureCoreClient();
  const initialResponse = await client
    .path("/azure/core/basic/parameters")
    .get({
      body: { inputName: "{Your inputName}" },
      queryParameters: { another: "{Your another}" },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listWithParametersSample();
}

main().catch(console.error);
