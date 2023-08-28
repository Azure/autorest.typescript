// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Five204Response,
  Four204Response,
  One204Response,
  ServiceContext as Client,
  Six204Response,
  Three204Response,
  Two204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  OneOptions,
  TwoOptions,
  ThreeOptions,
  FourOptions,
  FiveOptions,
  SixOptions,
} from "../models/options.js";

export function _oneSend(
  context: Client,
  options: OneOptions = { requestOptions: {} }
): StreamableMethod<One204Response> {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oneDeserialize(result: One204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function one(
  context: Client,
  options: OneOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _oneSend(context, options);
  return _oneDeserialize(result);
}

export function _twoSend(
  context: Client,
  options: TwoOptions = { requestOptions: {} }
): StreamableMethod<Two204Response> {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _twoDeserialize(result: Two204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function two(
  context: Client,
  options: TwoOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _twoSend(context, options);
  return _twoDeserialize(result);
}

export function _threeSend(
  context: Client,
  options: ThreeOptions = { requestOptions: {} }
): StreamableMethod<Three204Response> {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _threeDeserialize(
  result: Three204Response
): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function three(
  context: Client,
  options: ThreeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _threeSend(context, options);
  return _threeDeserialize(result);
}

export function _fourSend(
  context: Client,
  options: FourOptions = { requestOptions: {} }
): StreamableMethod<Four204Response> {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fourDeserialize(result: Four204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function four(
  context: Client,
  options: FourOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _fourSend(context, options);
  return _fourDeserialize(result);
}

export function _fiveSend(
  context: Client,
  options: FiveOptions = { requestOptions: {} }
): StreamableMethod<Five204Response> {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fiveDeserialize(result: Five204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function five(
  context: Client,
  options: FiveOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _fiveSend(context, options);
  return _fiveDeserialize(result);
}

export function _sixSend(
  context: Client,
  options: SixOptions = { requestOptions: {} }
): StreamableMethod<Six204Response> {
  return context
    .path("/six")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sixDeserialize(result: Six204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function six(
  context: Client,
  options: SixOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _sixSend(context, options);
  return _sixDeserialize(result);
}
