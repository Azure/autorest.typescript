// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Four204Response,
  ServiceContext as Client,
  Six204Response,
  Two204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  RenamedTwoOptions,
  RenamedFourOptions,
  RenamedSixOptions,
} from "../models/options.js";

export function _renamedTwoSend(
  context: Client,
  options: RenamedTwoOptions = { requestOptions: {} }
): StreamableMethod<Two204Response> {
  return context
    .path("/two")
    .patch({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedTwoDeserialize(
  _result: Two204Response
): Promise<void> {
  return;
}

export async function renamedTwo(
  context: Client,
  options: RenamedTwoOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedTwoSend(context, options);
  return _renamedTwoDeserialize(result);
}

export function _renamedFourSend(
  context: Client,
  options: RenamedFourOptions = { requestOptions: {} }
): StreamableMethod<Four204Response> {
  return context
    .path("/four")
    .patch({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFourDeserialize(
  _result: Four204Response
): Promise<void> {
  return;
}

export async function renamedFour(
  context: Client,
  options: RenamedFourOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedFourSend(context, options);
  return _renamedFourDeserialize(result);
}

export function _renamedSixSend(
  context: Client,
  options: RenamedSixOptions = { requestOptions: {} }
): StreamableMethod<Six204Response> {
  return context
    .path("/six")
    .patch({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedSixDeserialize(
  _result: Six204Response
): Promise<void> {
  return;
}

export async function renamedSix(
  context: Client,
  options: RenamedSixOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedSixSend(context, options);
  return _renamedSixDeserialize(result);
}
