// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPostAsyncRelativeRetry400Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRelativeRetry400
 *
 * @summary call operation PostAsyncRelativeRetry400
 */
async function lrosaDsPostAsyncRelativeRetry400Sample() {
  const client = createLRORestClient();
  const options: LrosaDsPostAsyncRelativeRetry400Parameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/nonretryerror/postasync/retry/400")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetry400Sample();
}

main().catch(console.error);
