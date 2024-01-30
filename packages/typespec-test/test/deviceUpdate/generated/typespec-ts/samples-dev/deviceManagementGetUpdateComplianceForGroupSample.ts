// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetUpdateComplianceForGroup
 *
 * @summary call operation GetUpdateComplianceForGroup
 */
async function deviceManagementGetUpdateComplianceForGroupSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const groupId = "{Your groupId}";
  const result = await client
    .path("/management/groups/{groupId}/updateCompliance", groupId)
    .get();
  console.log(result);
}

async function main() {
  deviceManagementGetUpdateComplianceForGroupSample();
}

main().catch(console.error);
