// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createWidgetManagerClient, {
  paginate,
} from "@azure-rest/contosowidgetmanager-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListWidgets
 *
 * @summary call operation ListWidgets
 */
async function listWidgetsSample() {
  const endpoint = "{Your endpoint}";
  const client = createWidgetManagerClient(endpoint);
  const initialResponse = await client.path("/widgets").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listWidgetsSample();
}

main().catch(console.error);
