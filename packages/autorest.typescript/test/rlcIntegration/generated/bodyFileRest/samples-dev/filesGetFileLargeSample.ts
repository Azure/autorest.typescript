// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFileClient from "@msinternal/body-file";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetFileLarge
 *
 * @summary call operation GetFileLarge
 */
async function filesGetFileLargeSample() {
  const client = createBodyFileClient();
  const result = await client.path("/files/stream/verylarge").get();
  console.log(result);
}

async function main() {
  filesGetFileLargeSample();
}

main().catch(console.error);
