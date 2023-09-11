// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LRORetrysPutAsyncRelativeRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRelativeRetrySucceeded
 *
 * @summary call operation PutAsyncRelativeRetrySucceeded
 */
async function lRORetrysPutAsyncRelativeRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LRORetrysPutAsyncRelativeRetrySucceededParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/retryerror/putasync/retry/succeeded")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysPutAsyncRelativeRetrySucceededSample();
}

main().catch(console.error);
