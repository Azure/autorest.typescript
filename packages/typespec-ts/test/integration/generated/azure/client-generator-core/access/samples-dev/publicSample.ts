// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Public
 *
 * @summary call operation Public
 */
async function publicSample() {
  const client = createAccessClient();
  const result = await client
    .path("/azure/client-generator-core/access/sharedModelInOperation/public")
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  publicSample();
}

main().catch(console.error);
