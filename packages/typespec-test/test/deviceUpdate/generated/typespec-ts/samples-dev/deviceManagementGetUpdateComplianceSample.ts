// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetUpdateCompliance
 *
 * @summary call operation GetUpdateCompliance
 */
async function deviceManagementGetUpdateComplianceSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const result = await client.path("/management/updateCompliance").get();
  console.log(result);
}

async function main() {
  deviceManagementGetUpdateComplianceSample();
}

main().catch(console.error);
