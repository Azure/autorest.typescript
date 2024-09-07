// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ModerationsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { input: content["input"], model: content["model"] },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateModerationResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    model: result.body["model"],
    results: result.body["results"].map((p: any) => {
      return {
        flagged: p["flagged"],
        categories: {
          hate: p.categories["hate"],
          "hate/threatening": p.categories["hate/threatening"],
          harassment: p.categories["harassment"],
          "harassment/threatening": p.categories["harassment/threatening"],
          "self-harm": p.categories["self-harm"],
          "self-harm/intent": p.categories["self-harm/intent"],
          "self-harm/instructive": p.categories["self-harm/instructive"],
          sexual: p.categories["sexual"],
          "sexual/minors": p.categories["sexual/minors"],
          violence: p.categories["violence"],
          "violence/graphic": p.categories["violence/graphic"],
        },
        category_scores: {
          hate: p.category_scores["hate"],
          "hate/threatening": p.category_scores["hate/threatening"],
          harassment: p.category_scores["harassment"],
          "harassment/threatening": p.category_scores["harassment/threatening"],
          "self-harm": p.category_scores["self-harm"],
          "self-harm/intent": p.category_scores["self-harm/intent"],
          "self-harm/instructive": p.category_scores["self-harm/instructive"],
          sexual: p.category_scores["sexual"],
          "sexual/minors": p.category_scores["sexual/minors"],
          violence: p.category_scores["violence"],
          "violence/graphic": p.category_scores["violence/graphic"],
        },
      };
    }),
  };
}

export async function create(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, content, options);
  return _createDeserialize(result);
}
