// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureCoreClient, { ExportParameters } from "@msinternal/azurecore";
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
  const options: ExportParameters = {
    queryParameters: { format: "{Your format}" },
  };
  const result = await client
    .path("/azure/core/basic/users/{id}:export", id)
    .post(options);
  console.log(result);
}

async function main() {
  exportSample();
}

main().catch(console.error);
