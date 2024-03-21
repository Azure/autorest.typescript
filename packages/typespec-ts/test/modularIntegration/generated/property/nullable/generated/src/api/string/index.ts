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
  StringGetNonNullOptions,
  StringGetNullOptions,
  StringPatchNonNullOptions,
  StringPatchNullOptions,
} from "../../models/options.js";

export function _stringGetNonNullSend(
  context: Client,
  options: StringGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<StringModelGetNonNull200Response> {
  return context
    .path("/type/property/nullable/string/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetNonNullDeserialize(
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
export async function stringGetNonNull(
  context: Client,
  options: StringGetNonNullOptions = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetNonNullSend(context, options);
  return _stringGetNonNullDeserialize(result);
}

export function _stringGetNullSend(
  context: Client,
  options: StringGetNullOptions = { requestOptions: {} },
): StreamableMethod<StringModelGetNull200Response> {
  return context
    .path("/type/property/nullable/string/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetNullDeserialize(
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
export async function stringGetNull(
  context: Client,
  options: StringGetNullOptions = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetNullSend(context, options);
  return _stringGetNullDeserialize(result);
}

export function _stringPatchNonNullSend(
  context: Client,
  body: StringProperty,
  options: StringPatchNonNullOptions = { requestOptions: {} },
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

export async function _stringPatchNonNullDeserialize(
  result: StringModelPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function stringPatchNonNull(
  context: Client,
  body: StringProperty,
  options: StringPatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPatchNonNullSend(context, body, options);
  return _stringPatchNonNullDeserialize(result);
}

export function _stringPatchNullSend(
  context: Client,
  body: StringProperty,
  options: StringPatchNullOptions = { requestOptions: {} },
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

export async function _stringPatchNullDeserialize(
  result: StringModelPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function stringPatchNull(
  context: Client,
  body: StringProperty,
  options: StringPatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPatchNullSend(context, body, options);
  return _stringPatchNullDeserialize(result);
}
