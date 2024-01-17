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
  Group1OneOptions,
  Group1ThreeOptions,
  Group1FourOptions,
} from "../../models/options.js";

export function _oneSend(
  context: Client,
  options: Group1OneOptions = { requestOptions: {} },
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
  options: Group1OneOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _oneSend(context, options);
  return _oneDeserialize(result);
}

export function _threeSend(
  context: Client,
  options: Group1ThreeOptions = { requestOptions: {} },
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
  options: Group1ThreeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _threeSend(context, options);
  return _threeDeserialize(result);
}

export function _fourSend(
  context: Client,
  options: Group1FourOptions = { requestOptions: {} },
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
  options: Group1FourOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _fourSend(context, options);
  return _fourDeserialize(result);
}
