// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createWidgetManagerClient from "@azure-rest/contosowidgetmanager-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetWidget
 *
 * @summary call operation GetWidget
 */
async function getWidgetSample() {
  const endpoint = "{Your endpoint}";
  const client = createWidgetManagerClient(endpoint);
  const widgetName = "{Your widgetName}";
  const result = await client.path("/widgets/{widgetName}", widgetName).get();
  console.log(result);
}

async function main() {
  getWidgetSample();
}

main().catch(console.error);
