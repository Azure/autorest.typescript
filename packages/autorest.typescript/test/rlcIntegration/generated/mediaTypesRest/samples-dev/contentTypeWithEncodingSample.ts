// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ContentTypeWithEncoding
 *
 * @summary call operation ContentTypeWithEncoding
 */
async function contentTypeWithEncodingSample(): Promise<void> {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/contentTypeWithEncoding")
    .post({ body: "{Your body}", contentType: "text/plain; charset=UTF-8" });
  console.log(result);
}

async function main(): Promise<void> {
  await contentTypeWithEncodingSample();
}

main().catch(console.error);
