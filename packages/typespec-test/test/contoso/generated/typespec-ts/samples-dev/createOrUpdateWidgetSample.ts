// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createWidgetManagerClient, {
  CreateOrUpdateWidgetParameters,
  getLongRunningPoller,
} from "@azure-rest/contosowidgetmanager-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateWidget
 *
 * @summary call operation CreateOrUpdateWidget
 */
async function createOrUpdateWidgetSample() {
  const endpoint = "{Your endpoint}";
  const client = createWidgetManagerClient(endpoint);
  const widgetName = "{Your widgetName}";
  const options: CreateOrUpdateWidgetParameters = {
    body: {
      manufacturerId: '{Your "manufacturerId"}',
      sharedModel: { tag: '{Your "tag"}', createdDate: new Date() },
    },
    contentType: "application/merge-patch+json",
  };
  const initialResponse = await client
    .path("/widgets/{widgetName}", widgetName)
    .patch(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  createOrUpdateWidgetSample();
}

main().catch(console.error);
