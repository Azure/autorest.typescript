// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPostAsyncRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PostAsyncRetrySucceeded
 *
 * @summary call operation PostAsyncRetrySucceeded
 */
async function lROsPostAsyncRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LROsPostAsyncRetrySucceededParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/postasync/retry/succeeded")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPostAsyncRetrySucceededSample();
}

main().catch(console.error);
