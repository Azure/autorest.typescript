// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Auto generated sample for operation  ResponseUnionBody
 *
 * @summary Auto generated sample for operation  ResponseUnionBody
 * x-ms-original-file: NA
 */
async function responseUnionBodySample() {
  const client = createUnionBodyClient();
  const result = await client.path().get();
  console.log(result);
}

async function main() {
  responseUnionBodySample();
}

main().catch(console.error);
