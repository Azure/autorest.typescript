// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutAsyncRetryFailedParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRetryFailed
 *
 * @summary call operation PutAsyncRetryFailed
 */
async function lROsPutAsyncRetryFailedSample() {
  const client = createLRORestClient();
  const options: LROsPutAsyncRetryFailedParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/putasync/retry/failed")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutAsyncRetryFailedSample();
}

main().catch(console.error);
