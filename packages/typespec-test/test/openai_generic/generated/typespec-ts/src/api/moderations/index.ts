// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
import {
  isUnexpected,
  ModerationsCreate200Response,
  ModerationsCreateDefaultResponse,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ModerationsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptions = { requestOptions: {} },
): StreamableMethod<
  ModerationsCreate200Response | ModerationsCreateDefaultResponse
> {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { input: content["input"], model: content["model"] },
    });
}

export async function _createDeserialize(
  result: ModerationsCreate200Response | ModerationsCreateDefaultResponse,
): Promise<CreateModerationResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    model: result.body["model"],
    results: result.body["results"].map((p) => ({
      flagged: p["flagged"],
      categories: {
        hate: p.categories["hate"],
        "hate/threatening": p.categories["hate/threatening"],
        harassment: p.categories["harassment"],
        "harassment/threatening": p.categories["harassment/threatening"],
        selfHarm: p.categories["self-harm"],
        "selfHarm/intent": p.categories["self-harm/intent"],
        "selfHarm/instructive": p.categories["self-harm/instructive"],
        sexual: p.categories["sexual"],
        "sexual/minors": p.categories["sexual/minors"],
        violence: p.categories["violence"],
        "violence/graphic": p.categories["violence/graphic"],
      },
      categoryScores: {
        hate: p.category_scores["hate"],
        "hate/threatening": p.category_scores["hate/threatening"],
        harassment: p.category_scores["harassment"],
        "harassment/threatening": p.category_scores["harassment/threatening"],
        selfHarm: p.category_scores["self-harm"],
        "selfHarm/intent": p.category_scores["self-harm/intent"],
        "selfHarm/instructive": p.category_scores["self-harm/instructive"],
        sexual: p.category_scores["sexual"],
        "sexual/minors": p.category_scores["sexual/minors"],
        violence: p.category_scores["violence"],
        "violence/graphic": p.category_scores["violence/graphic"],
      },
    })),
  };
}

export async function create(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptions = { requestOptions: {} },
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, content, options);
  return _createDeserialize(result);
}
