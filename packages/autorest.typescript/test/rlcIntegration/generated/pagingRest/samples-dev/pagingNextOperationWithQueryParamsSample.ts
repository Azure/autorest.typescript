// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingNextOperationWithQueryParamsParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NextOperationWithQueryParams
 *
 * @summary call operation NextOperationWithQueryParams
 */
async function pagingNextOperationWithQueryParamsSample() {
  const client = createPagingClient();
  const options: PagingNextOperationWithQueryParamsParameters = {
    queryParameters: { queryConstant: true }
  };
  const initialResponse = await client
    .path("/paging/multiple/nextOperationWithQueryParams")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingNextOperationWithQueryParamsSample();
}

main().catch(console.error);
