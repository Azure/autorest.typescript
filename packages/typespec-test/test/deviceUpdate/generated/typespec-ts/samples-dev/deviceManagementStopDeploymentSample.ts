// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StopDeployment
 *
 * @summary call operation StopDeployment
 */
async function deviceManagementStopDeploymentSample() {
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
  const deploymentId = "{Your deploymentId}";
  const result = await client
    .path(
      "/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}:cancel",
      groupId,
      deviceClassId,
      deploymentId,
    )
    .post({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deviceManagementStopDeploymentSample();
}

main().catch(console.error);
