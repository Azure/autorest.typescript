// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRelativeRetryInvalidHeader
 *
 * @summary call operation PostAsyncRelativeRetryInvalidHeader
 */
async function lrosaDsPostAsyncRelativeRetryInvalidHeaderSample() {
  const client = createLRORestClient();
  const options: LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/postasync/retry/invalidheader")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetryInvalidHeaderSample();
}

main().catch(console.error);
