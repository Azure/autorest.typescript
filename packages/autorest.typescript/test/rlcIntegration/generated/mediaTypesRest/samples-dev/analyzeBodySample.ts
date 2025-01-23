// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMediaTypesClient from "@msinternal/media-types-service-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation AnalyzeBody
 *
 * @summary call operation AnalyzeBody
 */
async function analyzeBodySample(): Promise<void> {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/analyze")
    .post({ body: "{Your body}", contentType: "application/pdf" });
  console.log(result);
}

async function main(): Promise<void> {
  await analyzeBodySample();
}

main().catch(console.error);
