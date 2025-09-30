// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieves the network a given device is on. Returns network in a networkCode format that can be used for other APIs.
 *
 * @summary retrieves the network a given device is on. Returns network in a networkCode format that can be used for other APIs.
 * x-ms-original-file: 2024-02-09-preview/DeviceNetwork_Retrieve_MaximumSet_Gen.json
 */
async function deviceNetworkRetrieve(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(credential);
  const result = await client.deviceNetwork.retrieve(
    {
      identifierType: "ipv6",
      identifier: "3001:0da8:75a3:0000:0000:8a2e:0370:7334",
    },
    "zdgrzzaxlodrvewbksn",
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deviceNetworkRetrieve();
}

main().catch(console.error);
