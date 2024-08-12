// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function operationsListMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const client = new NetworkAnalyticsClient(credential);
  const result = await client.operations.list();
  console.log(result);
}

async function main() {
  operationsListMaximumSetGen();
}

main().catch(console.error);

async function operationsListMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const client = new NetworkAnalyticsClient(credential);
  const result = await client.operations.list();
  console.log(result);
}

async function main() {
  operationsListMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
