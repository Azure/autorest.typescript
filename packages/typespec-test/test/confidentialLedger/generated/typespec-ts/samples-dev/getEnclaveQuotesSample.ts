// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetEnclaveQuotes
 *
 * @summary call operation GetEnclaveQuotes
 */
async function getEnclaveQuotesSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const result = await client.path("/app/enclaveQuotes").get();
  console.log(result);
}

async function main() {
  getEnclaveQuotesSample();
}

main().catch(console.error);
