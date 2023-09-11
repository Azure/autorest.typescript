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
async function pathsDoubleDecimalNegativeSample() {
  const client = createUrlRestClient();
  const doublePath = undefined;
  const result = await client
    .path("/paths/double/-9999999.999/{doublePath}", doublePath)
    .get();
  console.log(result);
}

async function main() {
  pathsDoubleDecimalNegativeSample();
}

main().catch(console.error);
