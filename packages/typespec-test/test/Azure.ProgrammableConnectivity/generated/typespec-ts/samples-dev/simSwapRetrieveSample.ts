// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to provides timestamp of latest SIM swap
 *
 * @summary provides timestamp of latest SIM swap
 * x-ms-original-file: 2024-02-09-preview/SimSwap_Retrieve_MaximumSet_Gen.json
 */
async function simSwapRetrieve(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(credential);
  const result = await client.simSwap.retrieve(
    "zdgrzzaxlodrvewbksn",
    {
      phoneNumber: "+61215310263792",
      networkIdentifier: {
        identifierType: "IPv6",
        identifier: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
      },
    },
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await simSwapRetrieve();
}

main().catch(console.error);
