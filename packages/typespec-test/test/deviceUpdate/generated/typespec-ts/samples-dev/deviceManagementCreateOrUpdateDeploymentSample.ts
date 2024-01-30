// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateDeployment
 *
 * @summary call operation CreateOrUpdateDeployment
 */
async function deviceManagementCreateOrUpdateDeploymentSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const groupId = "{Your groupId}";
  const deploymentId = "{Your deploymentId}";
  const result = await client
    .path(
      "/management/groups/{groupId}/deployments/{deploymentId}",
      groupId,
      deploymentId,
    )
    .put({
      body: {
        deploymentId: "{Your deploymentId}",
        startDateTime: new Date(),
        update: {},
        groupId: "{Your groupId}",
        rollbackPolicy: {
          update: {},
          failure: { devicesFailedPercentage: 123, devicesFailedCount: 123 },
        },
      },
    });
  console.log(result);
}

async function main() {
  deviceManagementCreateOrUpdateDeploymentSample();
}

main().catch(console.error);
