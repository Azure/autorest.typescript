// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetMultiplePagesWithOffsetParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultiplePagesWithOffset
 *
 * @summary call operation GetMultiplePagesWithOffset
 */
async function pagingGetMultiplePagesWithOffsetSample() {
  const client = createPagingClient();
  const offset = 123;
  const options: PagingGetMultiplePagesWithOffsetParameters = {
    headers: {
      "client-request-id": "{Your client-request-id}",
      maxresults: 123,
      timeout: 123
    }
  };
  const initialResponse = await client
    .path("/paging/multiple/withpath/{offset}", offset)
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetMultiplePagesWithOffsetSample();
}

main().catch(console.error);
