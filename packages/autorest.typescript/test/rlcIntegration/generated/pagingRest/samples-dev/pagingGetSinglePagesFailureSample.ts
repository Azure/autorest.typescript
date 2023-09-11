// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSinglePagesFailure
 *
 * @summary call operation GetSinglePagesFailure
 */
async function pagingGetSinglePagesFailureSample() {
  const client = createPagingClient();
  const initialResponse = await client.path("/paging/single/failure").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetSinglePagesFailureSample();
}

main().catch(console.error);
