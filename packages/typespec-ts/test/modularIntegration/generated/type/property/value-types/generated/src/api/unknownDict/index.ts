// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownDictProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownDictGetOptionalParams,
  UnknownDictPutOptionalParams,
} from "../../models/options.js";

export function _unknownDictGetSend(
  context: Client,
  options: UnknownDictGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/dict")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownDictGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnknownDictProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownDictGet(
  context: Client,
  options: UnknownDictGetOptionalParams = { requestOptions: {} },
): Promise<UnknownDictProperty> {
  const result = await _unknownDictGetSend(context, options);
  return _unknownDictGetDeserialize(result);
}

export function _unknownDictPutSend(
  context: Client,
  body: UnknownDictProperty,
  options: UnknownDictPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/dict")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownDictPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownDictPut(
  context: Client,
  body: UnknownDictProperty,
  options: UnknownDictPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownDictPutSend(context, body, options);
  return _unknownDictPutDeserialize(result);
}
