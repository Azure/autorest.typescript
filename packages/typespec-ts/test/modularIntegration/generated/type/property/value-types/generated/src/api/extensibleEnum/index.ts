// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtensibleEnumProperty, InnerEnum } from "../../models/models.js";
import {
  ValueTypesContext as Client,
  ExtensibleEnumGet200Response,
  ExtensibleEnumPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtensibleEnumGetOptionalParams,
  ExtensibleEnumPutOptionalParams,
} from "../../models/options.js";

export function _extensibleEnumGetSend(
  context: Client,
  options: ExtensibleEnumGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtensibleEnumGet200Response> {
  return context
    .path("/type/property/value-types/extensible-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _extensibleEnumGetDeserialize(
  result: ExtensibleEnumGet200Response,
): Promise<ExtensibleEnumProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"] as InnerEnum,
  };
}

/** Get call */
export async function extensibleEnumGet(
  context: Client,
  options: ExtensibleEnumGetOptionalParams = { requestOptions: {} },
): Promise<ExtensibleEnumProperty> {
  const result = await _extensibleEnumGetSend(context, options);
  return _extensibleEnumGetDeserialize(result);
}

export function _extensibleEnumPutSend(
  context: Client,
  body: ExtensibleEnumProperty,
  options: ExtensibleEnumPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtensibleEnumPut204Response> {
  return context
    .path("/type/property/value-types/extensible-enum")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _extensibleEnumPutDeserialize(
  result: ExtensibleEnumPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function extensibleEnumPut(
  context: Client,
  body: ExtensibleEnumProperty,
  options: ExtensibleEnumPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _extensibleEnumPutSend(context, body, options);
  return _extensibleEnumPutDeserialize(result);
}
