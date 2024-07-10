// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUsageClient from "@msinternal/clientGeneratorCore-usage";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ModelInReadOnlyProperty
 *
 * @summary call operation ModelInReadOnlyProperty
 */
async function modelInReadOnlyPropertySample() {
  const client = createUsageClient();
  const result = await client
    .path("/azure/client-generator-core/usage/modelInReadOnlyProperty")
    .put({ body: {} });
  console.log(result);
}

async function main() {
  modelInReadOnlyPropertySample();
}

main().catch(console.error);
