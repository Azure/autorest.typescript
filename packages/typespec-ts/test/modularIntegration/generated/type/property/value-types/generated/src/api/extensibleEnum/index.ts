// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtensibleEnumProperty, InnerEnum } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtensibleEnumGetOptionalParams,
  ExtensibleEnumPutOptionalParams,
} from "../../models/options.js";

export function _extensibleEnumGetSend(
  context: Client,
  options: ExtensibleEnumGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/extensible-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _extensibleEnumGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ExtensibleEnumProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/type/property/value-types/extensible-enum")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _extensibleEnumPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
