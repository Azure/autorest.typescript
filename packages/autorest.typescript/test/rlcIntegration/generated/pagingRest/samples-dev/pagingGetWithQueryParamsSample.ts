// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingGetWithQueryParamsParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetWithQueryParams
 *
 * @summary call operation GetWithQueryParams
 */
async function pagingGetWithQueryParamsSample() {
  const client = createPagingClient();
  const options: PagingGetWithQueryParamsParameters = {
    queryParameters: { requiredQueryParameter: 123, queryConstant: true }
  };
  const initialResponse = await client
    .path("/paging/multiple/getWithQueryParams")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingGetWithQueryParamsSample();
}

main().catch(console.error);
