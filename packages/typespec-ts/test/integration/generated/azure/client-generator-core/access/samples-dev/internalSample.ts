// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Internal
 *
 * @summary call operation Internal
 */
async function internalSample() {
  const client = createAccessClient();
  const result = await client
    .path("/azure/client-generator-core/access/sharedModelInOperation/internal")
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  internalSample();
}

main().catch(console.error);
