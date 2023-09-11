// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, { paginate } from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetPagingModelWithItemNameWithXMSClientName
 *
 * @summary call operation GetPagingModelWithItemNameWithXMSClientName
 */
async function pagingGetPagingModelWithItemNameWithXMSClientNameSample() {
  const client = createPagingClient();
  const initialResponse = await client
    .path("/paging/itemNameWithXMSClientName")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetPagingModelWithItemNameWithXMSClientNameSample();
}

main().catch(console.error);
