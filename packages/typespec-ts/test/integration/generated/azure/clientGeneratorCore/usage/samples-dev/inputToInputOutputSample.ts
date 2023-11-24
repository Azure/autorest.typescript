// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUsageClient from "@msinternal/clientGeneratorCore-usage";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation InputToInputOutput
 *
 * @summary call operation InputToInputOutput
 */
async function inputToInputOutputSample() {
  const client = createUsageClient();
  const result = await client
    .path("/azure/client-generator-core/usage/inputToInputOutput")
    .post({ body: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  inputToInputOutputSample();
}

main().catch(console.error);
