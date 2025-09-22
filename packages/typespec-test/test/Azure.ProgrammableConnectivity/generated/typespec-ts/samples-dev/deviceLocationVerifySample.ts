// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to verifies whether a device is within a specified location area, defined as an accuracy (radius) around a point, specified by longitude and latitude.
 *
 * @summary verifies whether a device is within a specified location area, defined as an accuracy (radius) around a point, specified by longitude and latitude.
 * x-ms-original-file: 2024-02-09-preview/DeviceLocation_Verify_MaximumSet_Gen.json
 */
async function deviceLocationVerify(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(endpoint, credential);
  const result = await client.deviceLocation.verify(
    "zdgrzzaxlodrvewbksn",
    {
      networkIdentifier: { identifierType: "ipv4", identifier: "12.12.12.12" },
      latitude: 70,
      longitude: -161,
      accuracy: 91,
      device: {
        networkAccessIdentifier: "122345@domain.com",
        phoneNumber: "+447000000000",
        ipv4Address: { ipv4: "12.12.12.12", port: 2442 },
        ipv6Address: {
          ipv6: "3001:0da8:75a3:0000:0000:8a2e:0370:7334",
          port: 1643,
        },
      },
    },
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deviceLocationVerify();
}

main().catch(console.error);
