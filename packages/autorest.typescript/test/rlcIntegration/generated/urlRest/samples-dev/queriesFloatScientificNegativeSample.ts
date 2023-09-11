// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation FloatScientificNegative
 *
 * @summary call operation FloatScientificNegative
 */
async function queriesFloatScientificNegativeSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/float/-1.034E-20").get();
  console.log(result);
}

async function main() {
  queriesFloatScientificNegativeSample();
}

main().catch(console.error);
