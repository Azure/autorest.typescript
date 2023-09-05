// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Auto generated sample for operation  RequestUnionBody
 *
 * @summary Auto generated sample for operation  RequestUnionBody
 * x-ms-original-file: NA
 */
async function requestUnionBodySample() {
  const client = createUnionBodyClient();
  const result = await client.path().post();
  console.log(result);
}

async function main() {
  requestUnionBodySample();
}

main().catch(console.error);
