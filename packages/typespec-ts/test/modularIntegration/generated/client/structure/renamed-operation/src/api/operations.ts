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
  RenamedTwoOptions,
  RenamedFourOptions,
  RenamedSixOptions,
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "../models/options.js";

export function _renamedTwoSend(
  context: Client,
  options: RenamedTwoOptions = { requestOptions: {} }
): StreamableMethod<Two204Response> {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedTwoDeserialize(
  result: Two204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

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
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFourDeserialize(
  result: Four204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

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
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedSixDeserialize(
  result: Six204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function renamedSix(
  context: Client,
  options: RenamedSixOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedSixSend(context, options);
  return _renamedSixDeserialize(result);
}

export function _renamedOneSend(
  context: Client,
  options: RenamedOneOptions = { requestOptions: {} }
): StreamableMethod<One204Response> {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedOneDeserialize(
  result: One204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function renamedOne(
  context: Client,
  options: RenamedOneOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedOneSend(context, options);
  return _renamedOneDeserialize(result);
}

export function _renamedThreeSend(
  context: Client,
  options: RenamedThreeOptions = { requestOptions: {} }
): StreamableMethod<Three204Response> {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedThreeDeserialize(
  result: Three204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function renamedThree(
  context: Client,
  options: RenamedThreeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedThreeSend(context, options);
  return _renamedThreeDeserialize(result);
}

export function _renamedFiveSend(
  context: Client,
  options: RenamedFiveOptions = { requestOptions: {} }
): StreamableMethod<Five204Response> {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFiveDeserialize(
  result: Five204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function renamedFive(
  context: Client,
  options: RenamedFiveOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _renamedFiveSend(context, options);
  return _renamedFiveDeserialize(result);
}
