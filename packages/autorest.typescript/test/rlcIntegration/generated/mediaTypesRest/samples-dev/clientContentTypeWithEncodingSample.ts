// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ContentTypeWithEncoding
 *
 * @summary call operation ContentTypeWithEncoding
 */
async function clientContentTypeWithEncodingSample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/contentTypeWithEncoding")
    .post();
  console.log(result);
}

async function main() {
  clientContentTypeWithEncodingSample();
}

main().catch(console.error);
