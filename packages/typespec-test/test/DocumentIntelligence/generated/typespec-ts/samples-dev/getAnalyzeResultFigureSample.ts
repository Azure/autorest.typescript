// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAnalyzeResultFigure
 *
 * @summary call operation GetAnalyzeResultFigure
 */
async function getAnalyzeResultFigureSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const modelId = "{Your modelId}";
  const resultId = "{Your resultId}";
  const figureId = "{Your figureId}";
  const result = await client
    .path(
      "/documentModels/{modelId}/analyzeResults/{resultId}/figures/{figureId}",
      modelId,
      resultId,
      figureId,
    )
    .get();
  console.log(result);
}

async function main() {
  getAnalyzeResultFigureSample();
}

main().catch(console.error);
