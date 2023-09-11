// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutNoHeaderInRetryParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutNoHeaderInRetry
 *
 * @summary call operation PutNoHeaderInRetry
 */
async function lROsPutNoHeaderInRetrySample() {
  const client = createLRORestClient();
  const options: LROsPutNoHeaderInRetryParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/put/noheader/202/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutNoHeaderInRetrySample();
}

main().catch(console.error);
