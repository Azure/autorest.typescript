// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Decimal128Property } from "../../models/models.js";
import {
  Decimal128Get200Response,
  Decimal128Put204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Decimal128GetOptions,
  Decimal128PutOptions,
} from "../../models/options.js";

export function _decimal128GetSend(
  context: Client,
  options: Decimal128GetOptions = { requestOptions: {} },
): StreamableMethod<Decimal128Get200Response> {
  return context
    .path("/type/property/value-types/decimal128")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimal128GetDeserialize(
  result: Decimal128Get200Response,
): Promise<Decimal128Property> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function decimal128Get(
  context: Client,
  options: Decimal128GetOptions = { requestOptions: {} },
): Promise<Decimal128Property> {
  const result = await _decimal128GetSend(context, options);
  return _decimal128GetDeserialize(result);
}

export function _decimal128PutSend(
  context: Client,
  body: Decimal128Property,
  options: Decimal128PutOptions = { requestOptions: {} },
): StreamableMethod<Decimal128Put204Response> {
  return context
    .path("/type/property/value-types/decimal128")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _decimal128PutDeserialize(
  result: Decimal128Put204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function decimal128Put(
  context: Client,
  body: Decimal128Property,
  options: Decimal128PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128PutSend(context, body, options);
  return _decimal128PutDeserialize(result);
}
