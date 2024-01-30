// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  getLongRunningPoller,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ImportUpdate
 *
 * @summary call operation ImportUpdate
 */
async function deviceUpdateImportUpdateSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const initialResponse = await client
    .path("/updates:import")
    .post({
      body: [
        {
          importManifest: {
            url: "{Your url}",
            sizeInBytes: 123,
            hashes: { key: "{Your hashes}" },
          },
          friendlyName: "{Your friendlyName}",
          files: [{ filename: "{Your filename}", url: "{Your url}" }],
        },
      ],
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  deviceUpdateImportUpdateSample();
}

main().catch(console.error);
