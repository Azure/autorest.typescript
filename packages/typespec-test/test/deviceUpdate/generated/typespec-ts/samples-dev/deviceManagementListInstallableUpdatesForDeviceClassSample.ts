// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListInstallableUpdatesForDeviceClass
 *
 * @summary call operation ListInstallableUpdatesForDeviceClass
 */
async function deviceManagementListInstallableUpdatesForDeviceClassSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const deviceClassId = "{Your deviceClassId}";
  const initialResponse = await client
    .path(
      "/management/deviceClasses/{deviceClassId}/installableUpdates",
      deviceClassId,
    )
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  deviceManagementListInstallableUpdatesForDeviceClassSample();
}

main().catch(console.error);
