// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutNonRetry201Creating400InvalidJsonParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutNonRetry201Creating400InvalidJson
 *
 * @summary call operation PutNonRetry201Creating400InvalidJson
 */
async function lrosaDsPutNonRetry201Creating400InvalidJsonSample() {
  const client = createLRORestClient();
  const options: LrosaDsPutNonRetry201Creating400InvalidJsonParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/nonretryerror/put/201/creating/400/invalidjson")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutNonRetry201Creating400InvalidJsonSample();
}

main().catch(console.error);
