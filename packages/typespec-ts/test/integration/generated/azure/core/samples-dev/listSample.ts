// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureCoreClient, {
  ListParameters,
  paginate,
} from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation List
 *
 * @summary call operation List
 */
async function listSample() {
  const client = createAzureCoreClient();
  const options: ListParameters = {
    queryParameters: {
      top: 123,
      skip: 123,
      maxpagesize: 123,
      orderby: "{Your orderby}",
      filter: "{Your filter}",
      select: "{Your select}",
      expand: "{Your expand}",
    },
  };
  const initialResponse = await client
    .path("/azure/core/basic/users")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listSample();
}

main().catch(console.error);
