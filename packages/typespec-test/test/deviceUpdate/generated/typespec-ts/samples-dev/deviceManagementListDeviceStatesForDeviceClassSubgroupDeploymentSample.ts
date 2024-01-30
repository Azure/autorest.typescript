// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListDeviceStatesForDeviceClassSubgroupDeployment
 *
 * @summary call operation ListDeviceStatesForDeviceClassSubgroupDeployment
 */
async function deviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentSample() {
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
  const initialResponse = await client
    .path(
      "/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}/devicestates",
      groupId,
      deviceClassId,
      deploymentId,
    )
    .get({
      queryParameters: { filter: "{Your filter}" },
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  deviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentSample();
}

main().catch(console.error);
