// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
async function clientBinaryBodyWithThreeContentTypesSample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/binaryBodyThreeContentTypes")
    .post();
  console.log(result);
}

async function main() {
  clientBinaryBodyWithThreeContentTypesSample();
}

main().catch(console.error);
