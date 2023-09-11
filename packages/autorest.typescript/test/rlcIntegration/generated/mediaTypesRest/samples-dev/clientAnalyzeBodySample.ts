// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AnalyzeBody
 *
 * @summary call operation AnalyzeBody
 */
async function clientAnalyzeBodySample() {
  const client = createMediaTypesClient();
  const result = await client.path("/mediatypes/analyze").post();
  console.log(result);
}

async function main() {
  clientAnalyzeBodySample();
}

main().catch(console.error);
