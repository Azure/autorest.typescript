// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPostAsyncRelativeRetryNoPayloadParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRelativeRetryNoPayload
 *
 * @summary call operation PostAsyncRelativeRetryNoPayload
 */
async function lrosaDsPostAsyncRelativeRetryNoPayloadSample() {
  const client = createLRORestClient();
  const options: LrosaDsPostAsyncRelativeRetryNoPayloadParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/postasync/retry/nopayload")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetryNoPayloadSample();
}

main().catch(console.error);
