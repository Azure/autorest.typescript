// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultiplePagesFragmentWithGroupingNextLink
 *
 * @summary call operation GetMultiplePagesFragmentWithGroupingNextLink
 */
async function pagingGetMultiplePagesFragmentWithGroupingNextLinkSample() {
  const client = createPagingClient();
  const tenant = "{Your tenant}";
  const initialResponse = await client
    .path("/paging/multiple/fragmentwithgrouping/{tenant}", tenant)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetMultiplePagesFragmentWithGroupingNextLinkSample();
}

main().catch(console.error);
