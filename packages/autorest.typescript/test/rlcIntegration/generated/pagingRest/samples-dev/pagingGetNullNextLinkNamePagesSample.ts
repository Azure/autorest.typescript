// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetNullNextLinkNamePages
 *
 * @summary call operation GetNullNextLinkNamePages
 */
async function pagingGetNullNextLinkNamePagesSample() {
  const client = createPagingClient();
  const initialResponse = await client.path("/paging/nullnextlink").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetNullNextLinkNamePagesSample();
}

main().catch(console.error);
