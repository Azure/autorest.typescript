// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProgrammableConnectivityClient } from "@azure/programmableconnectivity";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to verifies the phone number (MSISDN) associated with a device. As part of the frontend authorization flow, the device is redirected to the operator network to authenticate directly.
 *
 * @summary verifies the phone number (MSISDN) associated with a device. As part of the frontend authorization flow, the device is redirected to the operator network to authenticate directly.
 * x-ms-original-file: 2024-02-09-preview/NumberVerification_VerifyWithoutCode_MaximumSet_Gen.json
 */
async function numberVerificationVerifyWithoutCode(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const credential = new DefaultAzureCredential();
  const client = new ProgrammableConnectivityClient(endpoint, credential);
  await client.numberVerification.verifyWithoutCode(
    "zdgrzzaxlodrvewbksn",
    {
      networkIdentifier: { identifierType: "ipv4", identifier: "12.12.12.12" },
      phoneNumber: "+14424318793",
      hashedPhoneNumber: "bwsl",
      redirectUri: "https://www.contoso.com",
    },
    { clientRequestId: "123e4567-e89b-12d3-a456-426614174000" },
  );
}

async function main(): Promise<void> {
  await numberVerificationVerifyWithoutCode();
}

main().catch(console.error);
