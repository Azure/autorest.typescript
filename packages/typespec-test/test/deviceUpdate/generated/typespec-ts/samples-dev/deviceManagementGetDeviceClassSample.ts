// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDeviceClass
 *
 * @summary call operation GetDeviceClass
 */
async function deviceManagementGetDeviceClassSample() {
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
    .get({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deviceManagementGetDeviceClassSample();
}

main().catch(console.error);
