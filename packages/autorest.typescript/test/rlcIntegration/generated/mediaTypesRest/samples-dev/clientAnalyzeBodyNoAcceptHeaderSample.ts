// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMediaTypesClient from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AnalyzeBodyNoAcceptHeader
 *
 * @summary call operation AnalyzeBodyNoAcceptHeader
 */
async function clientAnalyzeBodyNoAcceptHeaderSample() {
  const client = createMediaTypesClient();
  const result = await client.path("/mediatypes/analyzeNoAccept").post();
  console.log(result);
}

async function main() {
  clientAnalyzeBodyNoAcceptHeaderSample();
}

main().catch(console.error);
