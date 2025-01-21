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
async function analyzeBodySample() {
  const client = createMediaTypesClient();
  const result = await client
    .path("/mediatypes/analyze")
    .post({ body: "{Your body}", contentType: "application/pdf" });
  console.log(result);
}

async function main() {
  await analyzeBodySample();
}

main().catch(console.error);
