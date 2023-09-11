// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyFormDataClient from "@msinternal/body-formdata-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UploadFileViaBody
 *
 * @summary call operation UploadFileViaBody
 */
async function formdataUploadFileViaBodySample() {
  const client = createBodyFormDataClient();
  const result = await client.path("/formdata/stream/uploadfile").put();
  console.log(result);
}

async function main() {
  formdataUploadFileViaBodySample();
}

main().catch(console.error);
