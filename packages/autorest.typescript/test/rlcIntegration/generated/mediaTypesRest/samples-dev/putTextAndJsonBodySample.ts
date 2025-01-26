// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutTextAndJsonBody
 *
 * @summary call operation PutTextAndJsonBody
 */
async function putTextAndJsonBodySample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/textAndJson")
    .post({ body: "{Your body}", contentType: "text/plain" });
  console.log(result);
}

async function main() {
  await putTextAndJsonBodySample();
}

main().catch(console.error);
