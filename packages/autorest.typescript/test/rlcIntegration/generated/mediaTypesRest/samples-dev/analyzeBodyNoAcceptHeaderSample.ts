// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation AnalyzeBodyNoAcceptHeader
 *
 * @summary call operation AnalyzeBodyNoAcceptHeader
 */
async function analyzeBodyNoAcceptHeaderSample(): Promise<void> {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/analyzeNoAccept")
    .post({ body: "{Your body}", contentType: "application/pdf" });
  console.log(result);
}

async function main(): Promise<void> {
  await analyzeBodyNoAcceptHeaderSample();
}

main().catch(console.error);
