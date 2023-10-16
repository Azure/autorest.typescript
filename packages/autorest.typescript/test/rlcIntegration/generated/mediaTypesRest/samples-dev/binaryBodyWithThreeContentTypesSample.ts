// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMediaTypesClient, {
  BinaryBodyWithThreeContentTypesParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BinaryBodyWithThreeContentTypes
 *
 * @summary call operation BinaryBodyWithThreeContentTypes
 */
async function binaryBodyWithThreeContentTypesSample() {
  const client = createMediaTypesClient();
  const options = { body: "{Your body}", contentType: "application/json" };
  const result = await client
    .path("/mediatypes/binaryBodyThreeContentTypes")
    .post(options);
  console.log(result);
}

async function main() {
  binaryBodyWithThreeContentTypesSample();
}

main().catch(console.error);
