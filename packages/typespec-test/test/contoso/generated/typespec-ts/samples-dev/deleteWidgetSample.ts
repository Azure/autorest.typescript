// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createWidgetManagerClient, {
  getLongRunningPoller,
} from "@azure-rest/contosowidgetmanager-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteWidget
 *
 * @summary call operation DeleteWidget
 */
async function deleteWidgetSample() {
  const endpoint = "{Your endpoint}";
  const client = createWidgetManagerClient(endpoint);
  const widgetName = "{Your widgetName}";
  const initialResponse = await client
    .path("/widgets/{widgetName}", widgetName)
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  deleteWidgetSample();
}

main().catch(console.error);
