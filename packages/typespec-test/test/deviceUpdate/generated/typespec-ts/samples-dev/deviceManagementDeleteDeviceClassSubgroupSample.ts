// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteDeviceClassSubgroup
 *
 * @summary call operation DeleteDeviceClassSubgroup
 */
async function deviceManagementDeleteDeviceClassSubgroupSample() {
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
      "/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}",
      groupId,
      deviceClassId,
    )
    .delete({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deviceManagementDeleteDeviceClassSubgroupSample();
}

main().catch(console.error);
