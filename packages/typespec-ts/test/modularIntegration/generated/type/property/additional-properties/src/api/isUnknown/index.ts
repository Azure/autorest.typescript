// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IsUnknownAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsUnknownGet200Response,
  IsUnknownPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  IsUnknownGetOptionalParams,
  IsUnknownPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsUnknownGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordUnknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsUnknownGet200Response,
): Promise<IsUnknownAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as IsUnknownGet200Response;
  return _result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: IsUnknownGetOptionalParams = { requestOptions: {} },
): Promise<IsUnknownAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: IsUnknownAdditionalProperties,
  options: IsUnknownPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordUnknown")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: IsUnknownPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: IsUnknownAdditionalProperties,
  options: IsUnknownPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
