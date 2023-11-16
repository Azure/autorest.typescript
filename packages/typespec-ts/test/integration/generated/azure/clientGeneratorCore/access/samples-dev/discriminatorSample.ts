// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Discriminator
 *
 * @summary call operation Discriminator
 */
async function discriminatorSample() {
  const client = createAzureCoreClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/relativeModelInOperation/discriminator"
    )
    .get({ queryParameters: { kind: "{Your kind}" } });
  console.log(result);
}

async function main() {
  discriminatorSample();
}

main().catch(console.error);
