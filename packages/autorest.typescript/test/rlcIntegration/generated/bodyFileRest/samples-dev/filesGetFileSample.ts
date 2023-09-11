// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFileClient from "@msinternal/body-file";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetFile
 *
 * @summary call operation GetFile
 */
async function filesGetFileSample() {
  const client = createBodyFileClient();
  const result = await client.path("/files/stream/nonempty").get();
  console.log(result);
}

async function main() {
  filesGetFileSample();
}

main().catch(console.error);
