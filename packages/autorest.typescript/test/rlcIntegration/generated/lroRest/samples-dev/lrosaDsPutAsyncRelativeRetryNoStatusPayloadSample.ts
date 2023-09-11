// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRelativeRetryNoStatusPayload
 *
 * @summary call operation PutAsyncRelativeRetryNoStatusPayload
 */
async function lrosaDsPutAsyncRelativeRetryNoStatusPayloadSample() {
  const client = createLRORestClient();
  const options: LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/putasync/retry/nostatuspayload")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutAsyncRelativeRetryNoStatusPayloadSample();
}

main().catch(console.error);
