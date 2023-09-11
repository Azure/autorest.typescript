// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
async function clientPutTextAndJsonBodySample() {
  const client = createMediaTypesClient();
  const result = await client.path("/mediatypes/textAndJson").post();
  console.log(result);
}

async function main() {
  clientPutTextAndJsonBodySample();
}

main().catch(console.error);
