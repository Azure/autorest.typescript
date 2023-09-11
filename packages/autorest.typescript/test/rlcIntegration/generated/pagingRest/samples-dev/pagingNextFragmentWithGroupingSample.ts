// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NextFragmentWithGrouping
 *
 * @summary call operation NextFragmentWithGrouping
 */
async function pagingNextFragmentWithGroupingSample() {
  const client = createPagingClient();
  const tenant = "{Your tenant}";
  const nextLink = "{Your nextLink}";
  const initialResponse = await client
    .path(
      "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
      tenant,
      nextLink
    )
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingNextFragmentWithGroupingSample();
}

main().catch(console.error);
