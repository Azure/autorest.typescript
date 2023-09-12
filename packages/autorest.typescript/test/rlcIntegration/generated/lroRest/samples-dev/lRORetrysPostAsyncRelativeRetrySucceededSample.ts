// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LRORetrysPostAsyncRelativeRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRelativeRetrySucceeded
 *
 * @summary call operation PostAsyncRelativeRetrySucceeded
 */
async function lRORetrysPostAsyncRelativeRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LRORetrysPostAsyncRelativeRetrySucceededParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/retryerror/postasync/retry/succeeded")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysPostAsyncRelativeRetrySucceededSample();
}

main().catch(console.error);
