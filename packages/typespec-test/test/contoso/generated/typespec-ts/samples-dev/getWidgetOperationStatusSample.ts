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
 * This sample demonstrates how to call operation GetWidgetOperationStatus
 *
 * @summary call operation GetWidgetOperationStatus
 */
async function getWidgetOperationStatusSample() {
  const endpoint = "{Your endpoint}";
  const client = createWidgetManagerClient(endpoint);
  const widgetName = "{Your widgetName}";
  const operationId = "{Your operationId}";
  const initialResponse = await client
    .path(
      "/widgets/{widgetName}/operations/{operationId}",
      widgetName,
      operationId
    )
    .get();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  getWidgetOperationStatusSample();
}

main().catch(console.error);
