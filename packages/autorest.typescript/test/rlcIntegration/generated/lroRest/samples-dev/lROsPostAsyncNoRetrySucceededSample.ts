// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPostAsyncNoRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncNoRetrySucceeded
 *
 * @summary call operation PostAsyncNoRetrySucceeded
 */
async function lROsPostAsyncNoRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LROsPostAsyncNoRetrySucceededParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/postasync/noretry/succeeded")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPostAsyncNoRetrySucceededSample();
}

main().catch(console.error);
