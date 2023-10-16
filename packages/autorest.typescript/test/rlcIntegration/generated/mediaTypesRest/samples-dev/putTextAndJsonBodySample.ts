// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMediaTypesClient, {
  PutTextAndJsonBodyParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutTextAndJsonBody
 *
 * @summary call operation PutTextAndJsonBody
 */
async function putTextAndJsonBodySample() {
  const client = createMediaTypesClient();
  const options = { body: "{Your body}", contentType: "text/plain" };
  const result = await client.path("/mediatypes/textAndJson").post(options);
  console.log(result);
}

async function main() {
  putTextAndJsonBodySample();
}

main().catch(console.error);
