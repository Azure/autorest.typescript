// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation FirstResponseEmpty
 *
 * @summary call operation FirstResponseEmpty
 */
async function pagingFirstResponseEmptySample() {
  const client = createPagingClient();
  const initialResponse = await client
    .path("/paging/firstResponseEmpty/1")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingFirstResponseEmptySample();
}

main().catch(console.error);
