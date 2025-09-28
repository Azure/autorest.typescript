// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to verifies the phone number (MSISDN) associated with a device.
 *
 * @summary verifies the phone number (MSISDN) associated with a device.
 * x-ms-original-file: 2024-02-09-preview/NumberVerification_VerifyWithCode_MaximumSet_Gen.json
 */
async function numberVerificationVerifyWithCode(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(endpoint, credential);
  const result = await client.numberVerification.verifyWithCode(
    "zdgrzzaxlodrvewbksn",
    { apcCode: "yn" },
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await numberVerificationVerifyWithCode();
}

main().catch(console.error);
