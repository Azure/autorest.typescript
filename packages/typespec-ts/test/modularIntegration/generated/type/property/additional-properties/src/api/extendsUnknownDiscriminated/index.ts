// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  extendsUnknownAdditionalPropertiesDiscriminatedUnionSerializer,
  ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsUnknownDiscriminatedGet200Response,
  ExtendsUnknownDiscriminatedPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsUnknownDiscriminatedGetOptionalParams,
  ExtendsUnknownDiscriminatedPutOptionalParams,
} from "../options.js";

export function _getSend(
  context: Client,
  options: ExtendsUnknownDiscriminatedGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsUnknownDiscriminatedGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsUnknownDiscriminated")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsUnknownDiscriminatedGet200Response,
): Promise<ExtendsUnknownAdditionalPropertiesDiscriminatedUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsUnknownDiscriminatedGetOptionalParams = {
    requestOptions: {},
  },
): Promise<ExtendsUnknownAdditionalPropertiesDiscriminatedUnion> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
  options: ExtendsUnknownDiscriminatedPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsUnknownDiscriminatedPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsUnknownDiscriminated")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: extendsUnknownAdditionalPropertiesDiscriminatedUnionSerializer(
        body,
      ),
    });
}

export async function _putDeserialize(
  result: ExtendsUnknownDiscriminatedPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
  options: ExtendsUnknownDiscriminatedPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
