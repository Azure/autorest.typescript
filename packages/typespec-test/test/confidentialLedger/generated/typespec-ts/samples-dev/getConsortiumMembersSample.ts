// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetConsortiumMembers
 *
 * @summary call operation GetConsortiumMembers
 */
async function getConsortiumMembersSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const result = await client.path("/app/governance/members").get();
  console.log(result);
}

async function main() {
  getConsortiumMembersSample();
}

main().catch(console.error);
