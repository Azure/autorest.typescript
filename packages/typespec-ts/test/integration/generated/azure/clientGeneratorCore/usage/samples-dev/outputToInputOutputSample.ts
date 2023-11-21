// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUsageClient from "@msinternal/clientGeneratorCore-usage";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation OutputToInputOutput
 *
 * @summary call operation OutputToInputOutput
 */
async function outputToInputOutputSample() {
  const client = createUsageClient();
  const result = await client
    .path("/azure/client-generator-core/usage/outputToInputOutput")
    .get();
  console.log(result);
}

async function main() {
  outputToInputOutputSample();
}

main().catch(console.error);
