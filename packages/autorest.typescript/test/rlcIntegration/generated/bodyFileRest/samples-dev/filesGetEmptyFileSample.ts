// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFileClient from "@msinternal/body-file";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetEmptyFile
 *
 * @summary call operation GetEmptyFile
 */
async function filesGetEmptyFileSample() {
  const client = createBodyFileClient();
  const result = await client.path("/files/stream/empty").get();
  console.log(result);
}

async function main() {
  filesGetEmptyFileSample();
}

main().catch(console.error);
