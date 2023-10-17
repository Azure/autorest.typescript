// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Export
 *
 * @summary call operation Export
 */
async function exportSample() {
  const client = createAzureCoreClient();
  const id = 123;
  const result = await client
    .path("/azure/core/basic/users/{id}:export", id)
    .post({ queryParameters: { format: "{Your format}" } });
  console.log(result);
}

async function main() {
  exportSample();
}

main().catch(console.error);
