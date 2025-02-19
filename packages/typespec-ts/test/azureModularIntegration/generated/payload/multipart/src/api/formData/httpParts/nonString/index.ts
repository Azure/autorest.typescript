// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MultiPartContext as Client,
  FormDataHttpPartsNonStringFloatOptionalParams,
} from "../../../index.js";
import { _floatRequestSerializer } from "../../../../models/formData/httpParts/nonString/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _floatSend(
  context: Client,
  body: {
    temperature: {
      body: number;
      contentType: "text/plain";
    };
  },
  options: FormDataHttpPartsNonStringFloatOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/multipart/form-data/non-string-float")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: _floatRequestSerializer(body),
    });
}

export async function _floatDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Test content-type: multipart/form-data for non string */
export async function float(
  context: Client,
  body: {
    temperature: {
      body: number;
      contentType: "text/plain";
    };
  },
  options: FormDataHttpPartsNonStringFloatOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _floatSend(context, body, options);
  return _floatDeserialize(result);
}
