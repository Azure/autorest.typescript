// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFormDataClient from "@msinternal/body-formdata-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UploadFiles
 *
 * @summary call operation UploadFiles
 */
async function formdataUploadFilesSample() {
  const client = createBodyFormDataClient();
  const result = await client.path("/formdata/stream/uploadfiles").post();
  console.log(result);
}

async function main() {
  formdataUploadFilesSample();
}

main().catch(console.error);
