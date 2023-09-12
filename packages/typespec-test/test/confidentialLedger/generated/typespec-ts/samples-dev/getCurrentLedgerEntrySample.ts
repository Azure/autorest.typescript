// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient, {
  GetCurrentLedgerEntryParameters,
} from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetCurrentLedgerEntry
 *
 * @summary call operation GetCurrentLedgerEntry
 */
async function getCurrentLedgerEntrySample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const options: GetCurrentLedgerEntryParameters = {
    queryParameters: { collectionId: "{Your collectionId}" },
  };
  const result = await client
    .path("/app/transactions/getCurrentLedgerEntry")
    .get(options);
  console.log(result);
}

async function main() {
  getCurrentLedgerEntrySample();
}

main().catch(console.error);
