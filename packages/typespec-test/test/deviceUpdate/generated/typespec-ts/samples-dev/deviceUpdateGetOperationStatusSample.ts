// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetOperationStatus
 *
 * @summary call operation GetOperationStatus
 */
async function deviceUpdateGetOperationStatusSample() {
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
    .path("/updates/operations/{operationId}", operationId)
    .get({
      headers: {
        "if-none-match": "{Your if-none-match}",
        "x-ms-client-request-id": "{Your x-ms-client-request-id}",
      },
    });
  console.log(result);
}

async function main() {
  deviceUpdateGetOperationStatusSample();
}

main().catch(console.error);
