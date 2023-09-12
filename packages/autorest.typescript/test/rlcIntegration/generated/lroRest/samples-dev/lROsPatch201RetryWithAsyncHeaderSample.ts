// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPatch201RetryWithAsyncHeaderParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch201RetryWithAsyncHeader
 *
 * @summary call operation Patch201RetryWithAsyncHeader
 */
async function lROsPatch201RetryWithAsyncHeaderSample() {
  const client = createLRORestClient();
  const options: LROsPatch201RetryWithAsyncHeaderParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/patch/201/retry/onlyAsyncHeader")
    .patch(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPatch201RetryWithAsyncHeaderSample();
}

main().catch(console.error);
