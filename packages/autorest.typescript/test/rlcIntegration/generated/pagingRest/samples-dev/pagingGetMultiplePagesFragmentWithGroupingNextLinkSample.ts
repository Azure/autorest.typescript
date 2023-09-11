// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetMultiplePagesFragmentWithGroupingNextLinkParameters,
  paginate
} from "@msinternal/paging-service";
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
  const options: PagingGetMultiplePagesFragmentWithGroupingNextLinkParameters = {
    queryParameters: { api_version: '{Your "api_version"}' }
  };
  const initialResponse = await client
    .path("/paging/multiple/fragmentwithgrouping/{tenant}", tenant)
    .get(options);
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
