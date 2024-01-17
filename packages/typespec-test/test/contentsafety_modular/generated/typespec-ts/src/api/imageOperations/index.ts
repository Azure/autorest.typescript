// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeImageOptions,
  AnalyzeImageResult,
} from "../../models/models.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AnalyzeImage200Response,
  AnalyzeImageDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import { ImageOperationsAnalyzeImageOptions } from "../../models/options.js";

export function _analyzeImageSend(
  context: Client,
  body: AnalyzeImageOptions,
  options: ImageOperationsAnalyzeImageOptions = { requestOptions: {} },
): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse> {
  return context
    .path("/image:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        image: {
          content:
            body.image["content"] !== undefined
              ? uint8ArrayToString(body.image["content"], "base64")
              : undefined,
          blobUrl: body.image["blobUrl"],
        },
        categories: body["categories"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeImageDeserialize(
  result: AnalyzeImage200Response | AnalyzeImageDefaultResponse,
): Promise<AnalyzeImageResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    analyzeResults: result.body["analyzeResults"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeImage(
  context: Client,
  body: AnalyzeImageOptions,
  options: ImageOperationsAnalyzeImageOptions = { requestOptions: {} },
): Promise<AnalyzeImageResult> {
  const result = await _analyzeImageSend(context, body, options);
  return _analyzeImageDeserialize(result);
}
