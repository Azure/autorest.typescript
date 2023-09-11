// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DoubleDecimalNegative
 *
 * @summary call operation DoubleDecimalNegative
 */
async function queriesDoubleDecimalNegativeSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/double/-9999999.999").get();
  console.log(result);
}

async function main() {
  queriesDoubleDecimalNegativeSample();
}

main().catch(console.error);
