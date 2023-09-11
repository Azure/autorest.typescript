// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetMultiplePagesFragmentNextLinkParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultiplePagesFragmentNextLink
 *
 * @summary call operation GetMultiplePagesFragmentNextLink
 */
async function pagingGetMultiplePagesFragmentNextLinkSample() {
  const client = createPagingClient();
  const tenant = "{Your tenant}";
  const options: PagingGetMultiplePagesFragmentNextLinkParameters = {
    queryParameters: { api_version: '{Your "api_version"}' }
  };
  const initialResponse = await client
    .path("/paging/multiple/fragment/{tenant}", tenant)
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetMultiplePagesFragmentNextLinkSample();
}

main().catch(console.error);
