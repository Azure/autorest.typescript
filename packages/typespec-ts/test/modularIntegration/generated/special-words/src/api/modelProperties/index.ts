// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SameAsModel } from "../../models/models.js";
import { SpecialWordsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ModelPropertiesSameAsModelOptionalParams } from "../../models/options.js";

export function _modelPropertiesSameAsModelSend(
  context: Client,
  body: SameAsModel,
  options: ModelPropertiesSameAsModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/model-properties/same-as-model")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { SameAsModel: body["sameAsModel"] },
    });
}

export async function _modelPropertiesSameAsModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelPropertiesSameAsModel(
  context: Client,
  body: SameAsModel,
  options: ModelPropertiesSameAsModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelPropertiesSameAsModelSend(context, body, options);
  return _modelPropertiesSameAsModelDeserialize(result);
}
