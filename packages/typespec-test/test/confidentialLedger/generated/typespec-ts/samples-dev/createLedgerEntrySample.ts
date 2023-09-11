// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient, {
  CreateLedgerEntryParameters,
} from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateLedgerEntry
 *
 * @summary call operation CreateLedgerEntry
 */
async function createLedgerEntrySample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const options: CreateLedgerEntryParameters = {
    body: { contents: '{Your "contents"}' },
  };
  const result = await client
    .path("/app/transactions/transactions")
    .post(options);
  console.log(result);
}

async function main() {
  createLedgerEntrySample();
}

main().catch(console.error);
