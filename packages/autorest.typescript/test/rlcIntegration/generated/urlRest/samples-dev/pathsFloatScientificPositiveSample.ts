// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation FloatScientificPositive
 *
 * @summary call operation FloatScientificPositive
 */
async function pathsFloatScientificPositiveSample() {
  const client = createUrlRestClient();
  const floatPath = undefined;
  const result = await client
    .path("/paths/float/1.034E+20/{floatPath}", floatPath)
    .get();
  console.log(result);
}

async function main() {
  pathsFloatScientificPositiveSample();
}

main().catch(console.error);
