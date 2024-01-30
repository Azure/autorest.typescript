// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListUpdates
 *
 * @summary call operation ListUpdates
 */
async function deviceUpdateListUpdatesSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const initialResponse = await client
    .path("/updates")
    .get({
      queryParameters: { search: "{Your search}", filter: "{Your filter}" },
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  deviceUpdateListUpdatesSample();
}

main().catch(console.error);
