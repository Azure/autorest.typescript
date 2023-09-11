// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetEmptyNextLinkNamePages
 *
 * @summary call operation GetEmptyNextLinkNamePages
 */
async function pagingGetEmptyNextLinkNamePagesSample() {
  const client = createPagingClient();
  const initialResponse = await client.path("/paging/emptynextlink").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetEmptyNextLinkNamePagesSample();
}

main().catch(console.error);
