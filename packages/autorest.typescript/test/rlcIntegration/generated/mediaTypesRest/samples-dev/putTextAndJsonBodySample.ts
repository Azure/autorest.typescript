// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation PutTextAndJsonBody
 *
 * @summary call operation PutTextAndJsonBody
 */
async function putTextAndJsonBodySample(): Promise<void> {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/textAndJson")
    .post({ body: "{Your body}", contentType: "text/plain" });
  console.log(result);
}

async function main(): Promise<void> {
  await putTextAndJsonBodySample();
}

main().catch(console.error);
