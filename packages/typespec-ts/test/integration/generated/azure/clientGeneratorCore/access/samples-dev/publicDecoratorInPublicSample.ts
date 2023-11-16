// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PublicDecoratorInPublic
 *
 * @summary call operation PublicDecoratorInPublic
 */
async function publicDecoratorInPublicSample() {
  const client = createAccessClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic"
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  publicDecoratorInPublicSample();
}

main().catch(console.error);
