// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetLogCollectionDetailedStatus
 *
 * @summary call operation GetLogCollectionDetailedStatus
 */
async function deviceManagementGetLogCollectionDetailedStatusSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const operationId = "{Your operationId}";
  const result = await client
    .path(
      "/management/deviceDiagnostics/logCollections/{operationId}/detailedStatus",
      operationId,
    )
    .get();
  console.log(result);
}

async function main() {
  deviceManagementGetLogCollectionDetailedStatusSample();
}

main().catch(console.error);
