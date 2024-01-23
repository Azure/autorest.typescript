// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation InternalDecoratorInInternal
 *
 * @summary call operation InternalDecoratorInInternal
 */
async function internalDecoratorInInternalSample() {
  const client = createAccessClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal",
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  internalDecoratorInInternalSample();
}

main().catch(console.error);
