// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteDeviceClass
 *
 * @summary call operation DeleteDeviceClass
 */
async function deviceManagementDeleteDeviceClassSample() {
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
    .delete({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deviceManagementDeleteDeviceClassSample();
}

main().catch(console.error);
