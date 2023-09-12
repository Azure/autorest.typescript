// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutAsyncRelativeRetry400Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRelativeRetry400
 *
 * @summary call operation PutAsyncRelativeRetry400
 */
async function lrosaDsPutAsyncRelativeRetry400Sample() {
  const client = createLRORestClient();
  const options: LrosaDsPutAsyncRelativeRetry400Parameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/nonretryerror/putasync/retry/400")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutAsyncRelativeRetry400Sample();
}

main().catch(console.error);
