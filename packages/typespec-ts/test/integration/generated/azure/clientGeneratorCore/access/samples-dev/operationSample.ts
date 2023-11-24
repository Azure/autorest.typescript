// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAccessClient from "@msinternal/clientGeneratorCore-access";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Operation
 *
 * @summary call operation Operation
 */
async function operationSample() {
  const client = createAccessClient();
  const result = await client
    .path(
      "/azure/client-generator-core/access/relativeModelInOperation/operation"
    )
    .get({ queryParameters: { name: "{Your name}" } });
  console.log(result);
}

async function main() {
  operationSample();
}

main().catch(console.error);
