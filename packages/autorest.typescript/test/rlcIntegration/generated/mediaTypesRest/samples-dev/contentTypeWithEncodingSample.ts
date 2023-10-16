// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMediaTypesClient, {
  ContentTypeWithEncodingParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ContentTypeWithEncoding
 *
 * @summary call operation ContentTypeWithEncoding
 */
async function contentTypeWithEncodingSample() {
  const client = createMediaTypesClient();
  const options = {
    body: "{Your body}",
    contentType: "text/plain; charset=UTF-8"
  };
  const result = await client
    .path("/mediatypes/contentTypeWithEncoding")
    .post(options);
  console.log(result);
}

async function main() {
  contentTypeWithEncodingSample();
}

main().catch(console.error);
