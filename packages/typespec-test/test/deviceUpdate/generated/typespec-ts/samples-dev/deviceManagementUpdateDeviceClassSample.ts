// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UpdateDeviceClass
 *
 * @summary call operation UpdateDeviceClass
 */
async function deviceManagementUpdateDeviceClassSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const deviceClassId = "{Your deviceClassId}";
  const result = await client
    .path("/management/deviceClasses/{deviceClassId}", deviceClassId)
    .patch({
      body: { friendlyName: "{Your friendlyName}" },
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  deviceManagementUpdateDeviceClassSample();
}

main().catch(console.error);
