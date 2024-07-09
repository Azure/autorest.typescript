// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsStringProperty } from "../../models/models.js";
import {
  CollectionsStringGetNonNull200Response,
  CollectionsStringGetNull200Response,
  CollectionsStringPatchNonNull204Response,
  CollectionsStringPatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsStringGetNonNullOptionalParams,
  CollectionsStringGetNullOptionalParams,
  CollectionsStringPatchNonNullOptionalParams,
  CollectionsStringPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: CollectionsStringGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsStringGetNonNull200Response> {
  return context
    .path("/type/property/nullable/collections/string/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: CollectionsStringGetNonNull200Response,
): Promise<CollectionsStringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as CollectionsStringGetNonNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty: _result.body["nullableProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: CollectionsStringGetNonNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: CollectionsStringGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsStringGetNull200Response> {
  return context
    .path("/type/property/nullable/collections/string/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: CollectionsStringGetNull200Response,
): Promise<CollectionsStringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as CollectionsStringGetNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty: _result.body["nullableProperty"],
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: CollectionsStringGetNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsStringPatchNonNull204Response> {
  return context
    .path("/type/property/nullable/collections/string/non-null")
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
  result: CollectionsStringPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function patchNonNull(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsStringPatchNull204Response> {
  return context
    .path("/type/property/nullable/collections/string/null")
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
  result: CollectionsStringPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function patchNull(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
