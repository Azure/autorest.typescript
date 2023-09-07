// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetReceipt
 *
 * @summary call operation GetReceipt
 */
async function getReceiptSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const transactionId = "{Your transactionId}";
  const result = await client
    .path("/app/transactions/{transactionId}/receipt", transactionId)
    .get();
  console.log(result);
}

async function main() {
  getReceiptSample();
}

main().catch(console.error);
