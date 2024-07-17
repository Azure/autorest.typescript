// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Four204Response,
  One204Response,
  ServiceContext as Client,
  Three204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Group1OneOptionalParams,
  Group1ThreeOptionalParams,
  Group1FourOptionalParams,
} from "../options.js";

export function _oneSend(
  context: Client,
  options: Group1OneOptionalParams = { requestOptions: {} },
): StreamableMethod<One204Response> {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oneDeserialize(result: One204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function one(
  context: Client,
  options: Group1OneOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _oneSend(context, options);
  return _oneDeserialize(result);
}

export function _threeSend(
  context: Client,
  options: Group1ThreeOptionalParams = { requestOptions: {} },
): StreamableMethod<Three204Response> {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _threeDeserialize(
  result: Three204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function three(
  context: Client,
  options: Group1ThreeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _threeSend(context, options);
  return _threeDeserialize(result);
}

export function _fourSend(
  context: Client,
  options: Group1FourOptionalParams = { requestOptions: {} },
): StreamableMethod<Four204Response> {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fourDeserialize(result: Four204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function four(
  context: Client,
  options: Group1FourOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fourSend(context, options);
  return _fourDeserialize(result);
}
