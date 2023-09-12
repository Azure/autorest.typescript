// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsCustomHeaderPutAsyncRetrySucceededParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRetrySucceeded
 *
 * @summary call operation PutAsyncRetrySucceeded
 */
async function lROsCustomHeaderPutAsyncRetrySucceededSample() {
  const client = createLRORestClient();
  const options: LROsCustomHeaderPutAsyncRetrySucceededParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/customheader/putasync/retry/succeeded")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsCustomHeaderPutAsyncRetrySucceededSample();
}

main().catch(console.error);
