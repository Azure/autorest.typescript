// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PublicDecoratorInInternal
 *
 * @summary call operation PublicDecoratorInInternal
 */
async function publicDecoratorInInternalSample() {
  const client = createAzureCoreClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal"
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  publicDecoratorInInternalSample();
}

main().catch(console.error);
