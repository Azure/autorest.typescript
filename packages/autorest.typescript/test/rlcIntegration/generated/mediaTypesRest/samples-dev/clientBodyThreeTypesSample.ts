// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
async function clientBodyThreeTypesSample() {
  const client = createMediaTypesClient();
  const result = await client.path("/mediatypes/bodyThreeTypes").post();
  console.log(result);
}

async function main() {
  clientBodyThreeTypesSample();
}

main().catch(console.error);
