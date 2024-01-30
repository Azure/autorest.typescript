// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDeviceModule
 *
 * @summary call operation GetDeviceModule
 */
async function deviceManagementGetDeviceModuleSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const deviceId = "{Your deviceId}";
  const moduleId = "{Your moduleId}";
  const result = await client
    .path(
      "/management/devices/{deviceId}/modules/{moduleId}",
      deviceId,
      moduleId,
    )
    .get();
  console.log(result);
}

async function main() {
  deviceManagementGetDeviceModuleSample();
}

main().catch(console.error);
