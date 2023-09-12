// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetOdataMultiplePagesParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetOdataMultiplePages
 *
 * @summary call operation GetOdataMultiplePages
 */
async function pagingGetOdataMultiplePagesSample() {
  const client = createPagingClient();
  const options: PagingGetOdataMultiplePagesParameters = {
    headers: {
      "client-request-id": "{Your client-request-id}",
      maxresults: 123,
      timeout: 123
    }
  };
  const initialResponse = await client
    .path("/paging/multiple/odata")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetOdataMultiplePagesSample();
}

main().catch(console.error);
