// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringProperty } from "../../models/models.js";
import {
  NullableContext as Client,
  StringModelGetNonNull200Response,
  StringModelGetNull200Response,
  StringModelPatchNonNull204Response,
  StringModelPatchNull204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetNonNullOptionalParams,
  StringGetNullOptionalParams,
  StringPatchNonNullOptionalParams,
  StringPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: StringGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetNonNull200Response> {
  return context
    .path("/type/property/nullable/string/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: StringModelGetNonNull200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: StringGetNonNullOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: StringGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetNull200Response> {
  return context
    .path("/type/property/nullable/string/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: StringModelGetNull200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: StringGetNullOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: StringProperty,
  options: StringPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelPatchNonNull204Response> {
  return context
    .path("/type/property/nullable/string/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"],
      },
    });
}

export async function _patchNonNullDeserialize(
  result: StringModelPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function patchNonNull(
  context: Client,
  body: StringProperty,
  options: StringPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: StringProperty,
  options: StringPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelPatchNull204Response> {
  return context
    .path("/type/property/nullable/string/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"],
      },
    });
}

export async function _patchNullDeserialize(
  result: StringModelPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function patchNull(
  context: Client,
  body: StringProperty,
  options: StringPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
