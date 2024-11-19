// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BinaryBodyWithThreeContentTypes
 *
 * @summary call operation BinaryBodyWithThreeContentTypes
 */
async function binaryBodyWithThreeContentTypesSample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/binaryBodyThreeContentTypes")
    .post({ body: "{Your body}", contentType: "application/json" });
  console.log(result);
}

async function main() {
  binaryBodyWithThreeContentTypesSample();
}

main().catch(console.error);
