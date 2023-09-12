// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRelativeRetryInvalidHeader
 *
 * @summary call operation PutAsyncRelativeRetryInvalidHeader
 */
async function lrosaDsPutAsyncRelativeRetryInvalidHeaderSample() {
  const client = createLRORestClient();
  const options: LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/putasync/retry/invalidheader")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutAsyncRelativeRetryInvalidHeaderSample();
}

main().catch(console.error);
