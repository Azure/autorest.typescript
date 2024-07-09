// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelV1, ModelV2 } from "../models/models.js";
import {
  AddedContext as Client,
  V1200Response,
  V2200Response,
  V2InInterface200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  V1OptionalParams,
  V2OptionalParams,
  V2InInterfaceOptionalParams,
} from "../models/options.js";

export function _v1Send(
  context: Client,
  headerV2: string,
  body: ModelV1,
  options: V1OptionalParams = { requestOptions: {} },
): StreamableMethod<V1200Response> {
  return context
    .path("/v1")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "header-v2": headerV2 },
      body: {
        prop: body["prop"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _v1Deserialize(result: V1200Response): Promise<ModelV1> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as V1200Response;
  return {
    prop: _result.body["prop"],
    enumProp: _result.body["enumProp"],
    unionProp: _result.body["unionProp"],
  };
}

export async function v1(
  context: Client,
  headerV2: string,
  body: ModelV1,
  options: V1OptionalParams = { requestOptions: {} },
): Promise<ModelV1> {
  const result = await _v1Send(context, headerV2, body, options);
  return _v1Deserialize(result);
}

export function _v2Send(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): StreamableMethod<V2200Response> {
  return context
    .path("/v2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prop: body["prop"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _v2Deserialize(result: V2200Response): Promise<ModelV2> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as V2200Response;
  return {
    prop: _result.body["prop"],
    enumProp: _result.body["enumProp"],
    unionProp: _result.body["unionProp"],
  };
}

export async function v2(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): Promise<ModelV2> {
  const result = await _v2Send(context, body, options);
  return _v2Deserialize(result);
}

export function _v2InInterfaceSend(
  context: Client,
  body: ModelV2,
  options: V2InInterfaceOptionalParams = { requestOptions: {} },
): StreamableMethod<V2InInterface200Response> {
  return context
    .path("/interface-v2/v2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prop: body["prop"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _v2InInterfaceDeserialize(
  result: V2InInterface200Response,
): Promise<ModelV2> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as V2InInterface200Response;
  return {
    prop: _result.body["prop"],
    enumProp: _result.body["enumProp"],
    unionProp: _result.body["unionProp"],
  };
}

export async function v2InInterface(
  context: Client,
  body: ModelV2,
  options: V2InInterfaceOptionalParams = { requestOptions: {} },
): Promise<ModelV2> {
  const result = await _v2InInterfaceSend(context, body, options);
  return _v2InInterfaceDeserialize(result);
}
