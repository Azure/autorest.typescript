// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRelativeRetryInvalidJsonPolling
 *
 * @summary call operation PostAsyncRelativeRetryInvalidJsonPolling
 */
async function lrosaDsPostAsyncRelativeRetryInvalidJsonPollingSample() {
  const client = createLRORestClient();
  const options: LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/postasync/retry/invalidjsonpolling")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetryInvalidJsonPollingSample();
}

main().catch(console.error);
