// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  getLongRunningPoller,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteUpdate
 *
 * @summary call operation DeleteUpdate
 */
async function deviceUpdateDeleteUpdateSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const provider = "{Your provider}";
  const name = "{Your name}";
  const version = "{Your version}";
  const initialResponse = await client
    .path(
      "/updates/providers/{provider}/names/{name}/versions/{version}",
      provider,
      name,
      version,
    )
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  deviceUpdateDeleteUpdateSample();
}

main().catch(console.error);
