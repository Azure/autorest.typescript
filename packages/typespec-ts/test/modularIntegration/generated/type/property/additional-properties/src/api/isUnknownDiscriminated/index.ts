// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  isUnknownAdditionalPropertiesDiscriminatedUnionSerializer,
  IsUnknownAdditionalPropertiesDiscriminatedUnion,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsUnknownDiscriminatedGet200Response,
  IsUnknownDiscriminatedPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsUnknownDiscriminatedGetOptionalParams,
  IsUnknownDiscriminatedPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsUnknownDiscriminatedGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownDiscriminatedGet200Response> {
  return context
    .path("/type/property/additionalProperties/isUnknownDiscriminated")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsUnknownDiscriminatedGet200Response,
): Promise<IsUnknownAdditionalPropertiesDiscriminatedUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as IsUnknownDiscriminatedGet200Response;
  return _result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: IsUnknownDiscriminatedGetOptionalParams = { requestOptions: {} },
): Promise<IsUnknownAdditionalPropertiesDiscriminatedUnion> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: IsUnknownAdditionalPropertiesDiscriminatedUnion,
  options: IsUnknownDiscriminatedPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownDiscriminatedPut204Response> {
  return context
    .path("/type/property/additionalProperties/isUnknownDiscriminated")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: isUnknownAdditionalPropertiesDiscriminatedUnionSerializer(body),
    });
}

export async function _putDeserialize(
  result: IsUnknownDiscriminatedPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: IsUnknownAdditionalPropertiesDiscriminatedUnion,
  options: IsUnknownDiscriminatedPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
