// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFormDataClient from "@msinternal/body-formdata-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UploadFile
 *
 * @summary call operation UploadFile
 */
async function formdataUploadFileSample() {
  const client = createBodyFormDataClient();
  const result = await client.path("/formdata/stream/uploadfile").post();
  console.log(result);
}

async function main() {
  formdataUploadFileSample();
}

main().catch(console.error);
