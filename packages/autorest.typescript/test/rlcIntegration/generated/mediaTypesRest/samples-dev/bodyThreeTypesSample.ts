// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMediaTypesClient, {
  BodyThreeTypesParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BodyThreeTypes
 *
 * @summary call operation BodyThreeTypes
 */
async function bodyThreeTypesSample() {
  const client = createMediaTypesClient();
  const options = {
    body: "{Your body}",
    contentType: "application/octet-stream"
  };
  const result = await client.path("/mediatypes/bodyThreeTypes").post(options);
  console.log(result);
}

async function main() {
  bodyThreeTypesSample();
}

main().catch(console.error);
