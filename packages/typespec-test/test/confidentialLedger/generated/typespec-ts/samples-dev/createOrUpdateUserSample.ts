// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient, {
  CreateOrUpdateUserParameters,
} from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateUser
 *
 * @summary call operation CreateOrUpdateUser
 */
async function createOrUpdateUserSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const userId = "{Your userId}";
  const options: CreateOrUpdateUserParameters = {
    body: { assignedRole: "Administrator" },
    contentType: "application/merge-patch+json",
  };
  const result = await client
    .path("/app/users/{userId}", userId)
    .patch(options);
  console.log(result);
}

async function main() {
  createOrUpdateUserSample();
}

main().catch(console.error);
