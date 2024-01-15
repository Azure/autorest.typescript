// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NoDecoratorInInternal
 *
 * @summary call operation NoDecoratorInInternal
 */
async function noDecoratorInInternalSample() {
  const client = createAccessClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal",
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  noDecoratorInInternalSample();
}

main().catch(console.error);
