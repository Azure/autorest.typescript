// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetConstitution
 *
 * @summary call operation GetConstitution
 */
async function getConstitutionSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const result = await client.path("/app/governance/constitution").get();
  console.log(result);
}

async function main() {
  getConstitutionSample();
}

main().catch(console.error);
