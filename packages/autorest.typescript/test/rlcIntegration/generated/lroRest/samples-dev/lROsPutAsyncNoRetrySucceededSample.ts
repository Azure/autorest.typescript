// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutAsyncNoRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncNoRetrySucceeded
 *
 * @summary call operation PutAsyncNoRetrySucceeded
 */
async function lROsPutAsyncNoRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LROsPutAsyncNoRetrySucceededParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/putasync/noretry/succeeded")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutAsyncNoRetrySucceededSample();
}

main().catch(console.error);
