// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StartLogCollection
 *
 * @summary call operation StartLogCollection
 */
async function deviceManagementStartLogCollectionSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const operationId = "{Your operationId}";
  const result = await client
    .path(
      "/management/deviceDiagnostics/logCollections/{operationId}",
      operationId,
    )
    .put({
      body: {
        operationId: "{Your operationId}",
        deviceList: [
          { deviceId: "{Your deviceId}", moduleId: "{Your moduleId}" },
        ],
        description: "{Your description}",
      },
    });
  console.log(result);
}

async function main() {
  deviceManagementStartLogCollectionSample();
}

main().catch(console.error);
