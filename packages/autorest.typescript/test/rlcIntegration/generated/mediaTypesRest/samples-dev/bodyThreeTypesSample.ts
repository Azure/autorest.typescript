// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BodyThreeTypes
 *
 * @summary call operation BodyThreeTypes
 */
async function bodyThreeTypesSample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/bodyThreeTypes")
    .post({ body: "{Your body}", contentType: "application/octet-stream" });
  console.log(result);
}

async function main() {
  await bodyThreeTypesSample();
}

main().catch(console.error);
