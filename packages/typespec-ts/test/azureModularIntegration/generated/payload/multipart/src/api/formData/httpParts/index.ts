// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MultiPartContext as Client,
  FormDataHttpPartsJsonArrayAndFileArrayOptionalParams,
} from "../../index.js";
import {
  ComplexHttpPartsModelRequest,
  complexHttpPartsModelRequestSerializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _jsonArrayAndFileArraySend(
  context: Client,
  body: ComplexHttpPartsModelRequest,
  options: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/multipart/form-data/complex-parts-with-httppart")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: complexHttpPartsModelRequestSerializer(body),
    });
}

export async function _jsonArrayAndFileArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for mixed scenarios */
export async function jsonArrayAndFileArray(
  context: Client,
  body: ComplexHttpPartsModelRequest,
  options: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _jsonArrayAndFileArraySend(context, body, options);
  return _jsonArrayAndFileArrayDeserialize(result);
}
