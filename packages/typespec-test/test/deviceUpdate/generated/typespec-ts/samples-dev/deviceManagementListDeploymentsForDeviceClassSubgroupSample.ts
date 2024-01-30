// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListDeploymentsForDeviceClassSubgroup
 *
 * @summary call operation ListDeploymentsForDeviceClassSubgroup
 */
async function deviceManagementListDeploymentsForDeviceClassSubgroupSample() {
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
  const initialResponse = await client
    .path(
      "/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments",
      groupId,
      deviceClassId,
    )
    .get({
      queryParameters: { orderby: "{Your orderby}" },
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
  deviceManagementListDeploymentsForDeviceClassSubgroupSample();
}

main().catch(console.error);
