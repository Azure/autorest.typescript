// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMediaTypesClient, {
  BinaryBodyWithTwoContentTypesParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BinaryBodyWithTwoContentTypes
 *
 * @summary call operation BinaryBodyWithTwoContentTypes
 */
async function binaryBodyWithTwoContentTypesSample() {
  const client = createMediaTypesClient();
  const options: BinaryBodyWithTwoContentTypesParameters = {
    body: "{Your body}",
    contentType: "application/json"
  };
  const result = await client
    .path("/mediatypes/binaryBodyTwoContentTypes")
    .post(options);
  console.log(result);
}

async function main() {
  binaryBodyWithTwoContentTypesSample();
}

main().catch(console.error);
