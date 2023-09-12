// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPost202RetryInvalidHeaderParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post202RetryInvalidHeader
 *
 * @summary call operation Post202RetryInvalidHeader
 */
async function lrosaDsPost202RetryInvalidHeaderSample() {
  const client = createLRORestClient();
  const options: LrosaDsPost202RetryInvalidHeaderParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/post/202/retry/invalidheader")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPost202RetryInvalidHeaderSample();
}

main().catch(console.error);
