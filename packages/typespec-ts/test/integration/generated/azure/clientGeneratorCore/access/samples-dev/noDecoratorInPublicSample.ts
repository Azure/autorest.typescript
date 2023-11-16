// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation NoDecoratorInPublic
 *
 * @summary call operation NoDecoratorInPublic
 */
async function noDecoratorInPublicSample() {
  const client = createAccessClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic"
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  noDecoratorInPublicSample();
}

main().catch(console.error);
