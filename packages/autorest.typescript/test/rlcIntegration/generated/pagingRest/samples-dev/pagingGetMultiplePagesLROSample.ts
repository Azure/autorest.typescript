// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetMultiplePagesLROParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultiplePagesLRO
 *
 * @summary call operation GetMultiplePagesLRO
 */
async function pagingGetMultiplePagesLROSample() {
  const client = createPagingClient();
  const options: PagingGetMultiplePagesLROParameters = {
    headers: {
      "client-request-id": "{Your client-request-id}",
      maxresults: 123,
      timeout: 123
    }
  };
  const initialResponse = await client
    .path("/paging/multiple/lro")
    .post(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetMultiplePagesLROSample();
}

main().catch(console.error);
