// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPatch200SucceededIgnoreHeadersParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch200SucceededIgnoreHeaders
 *
 * @summary call operation Patch200SucceededIgnoreHeaders
 */
async function lROsPatch200SucceededIgnoreHeadersSample() {
  const client = createLRORestClient();
  const options: LROsPatch200SucceededIgnoreHeadersParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/patch/200/succeeded/ignoreheaders")
    .patch(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPatch200SucceededIgnoreHeadersSample();
}

main().catch(console.error);
