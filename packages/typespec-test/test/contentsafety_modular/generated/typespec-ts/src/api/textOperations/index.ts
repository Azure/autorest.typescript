// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnalyzeTextOptions, AnalyzeTextResult } from "../../models/models.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AnalyzeText200Response,
  AnalyzeTextDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { TextOperationsAnalyzeTextOptions } from "../../models/options.js";

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: TextOperationsAnalyzeTextOptions = { requestOptions: {} },
): StreamableMethod<AnalyzeText200Response | AnalyzeTextDefaultResponse> {
  return context
    .path("/text:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        text: body["text"],
        categories: body["categories"],
        blocklistNames: body["blocklistNames"],
        breakByBlocklists: body["breakByBlocklists"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeTextDeserialize(
  result: AnalyzeText200Response | AnalyzeTextDefaultResponse,
): Promise<AnalyzeTextResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistsMatchResults: !result.body["blocklistsMatchResults"]
      ? result.body["blocklistsMatchResults"]
      : result.body["blocklistsMatchResults"].map((p) => ({
          blocklistName: p["blocklistName"],
          blockItemId: p["blockItemId"],
          blockItemText: p["blockItemText"],
        })),
    analyzeResults: result.body["analyzeResults"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeText(
  context: Client,
  body: AnalyzeTextOptions,
  options: TextOperationsAnalyzeTextOptions = { requestOptions: {} },
): Promise<AnalyzeTextResult> {
  const result = await _analyzeTextSend(context, body, options);
  return _analyzeTextDeserialize(result);
}
