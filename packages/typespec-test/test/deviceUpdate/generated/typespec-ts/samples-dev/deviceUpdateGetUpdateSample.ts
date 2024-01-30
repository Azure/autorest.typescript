// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureDeviceUpdateClient from "@azure-rest/iot-device-update";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetUpdate
 *
 * @summary call operation GetUpdate
 */
async function deviceUpdateGetUpdateSample() {
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
  const result = await client
    .path(
      "/updates/providers/{provider}/names/{name}/versions/{version}",
      provider,
      name,
      version,
    )
    .get({ headers: { "if-none-match": "{Your if-none-match}" } });
  console.log(result);
}

async function main() {
  deviceUpdateGetUpdateSample();
}

main().catch(console.error);
