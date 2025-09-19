// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to verifies if a SIM swap has been performed during a past period (defined in the request with 'maxAgeHours' attribute). Returns 'True' if a SIM swap has occured.
 *
 * @summary verifies if a SIM swap has been performed during a past period (defined in the request with 'maxAgeHours' attribute). Returns 'True' if a SIM swap has occured.
 * x-ms-original-file: 2024-02-09-preview/SimSwap_Verify_MaximumSet_Gen.json
 */
async function simSwapVerify(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(credential);
  const result = await client.simSwap.verify(
    "zdgrzzaxlodrvewbksn",
    {
      maxAgeHours: 941,
      networkIdentifier: { identifierType: "ipv4", identifier: "12.12.12.12" },
    },
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await simSwapVerify();
}

main().catch(console.error);
