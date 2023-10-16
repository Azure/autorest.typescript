// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMediaTypesClient, {
  AnalyzeBodyNoAcceptHeaderParameters
} from "@msinternal/media-types-service-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AnalyzeBodyNoAcceptHeader
 *
 * @summary call operation AnalyzeBodyNoAcceptHeader
 */
async function analyzeBodyNoAcceptHeaderSample() {
  const client = createMediaTypesClient();
  const options = { body: "{Your body}", contentType: "application/pdf" };
  const result = await client.path("/mediatypes/analyzeNoAccept").post(options);
  console.log(result);
}

async function main() {
  analyzeBodyNoAcceptHeaderSample();
}

main().catch(console.error);
