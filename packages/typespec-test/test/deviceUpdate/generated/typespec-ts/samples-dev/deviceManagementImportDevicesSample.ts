// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  getLongRunningPoller,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ImportDevices
 *
 * @summary call operation ImportDevices
 */
async function deviceManagementImportDevicesSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const initialResponse = await client
    .path("/management/devices:import")
    .post({ body: "{Your body}" });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  deviceManagementImportDevicesSample();
}

main().catch(console.error);
