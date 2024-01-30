// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDeviceClassSubgroupUpdateCompliance
 *
 * @summary call operation GetDeviceClassSubgroupUpdateCompliance
 */
async function deviceManagementGetDeviceClassSubgroupUpdateComplianceSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const groupId = "{Your groupId}";
  const deviceClassId = "{Your deviceClassId}";
  const result = await client
    .path(
      "/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/updateCompliance",
      groupId,
      deviceClassId,
    )
    .get();
  console.log(result);
}

async function main() {
  deviceManagementGetDeviceClassSubgroupUpdateComplianceSample();
}

main().catch(console.error);
