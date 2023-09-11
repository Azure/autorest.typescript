// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultiplePagesFailureUri
 *
 * @summary call operation GetMultiplePagesFailureUri
 */
async function pagingGetMultiplePagesFailureUriSample() {
  const client = createPagingClient();
  const initialResponse = await client
    .path("/paging/multiple/failureuri")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetMultiplePagesFailureUriSample();
}

main().catch(console.error);
