// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDpgCustomizationClient, {
  getLongRunningPoller,
} from "@msinternal/dpg-customization-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up.
 *
 * @summary Long running put request that will either return to end users a final payload of a raw body, or a final payload of a model after the SDK has grown up.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/lro.json
 */
async function dpgLro(): Promise<void> {
  const client = createDpgCustomizationClient();
  const mode = "prod";
  const initialResponse = await client
    .path("/customization/lro/{mode}", mode)
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await dpgLro();
}

main().catch(console.error);
