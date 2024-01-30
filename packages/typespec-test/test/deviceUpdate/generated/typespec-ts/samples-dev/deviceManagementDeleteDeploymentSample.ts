// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteDeployment
 *
 * @summary call operation DeleteDeployment
 */
async function deviceManagementDeleteDeploymentSample() {
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
    .delete({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deviceManagementDeleteDeploymentSample();
}

main().catch(console.error);
