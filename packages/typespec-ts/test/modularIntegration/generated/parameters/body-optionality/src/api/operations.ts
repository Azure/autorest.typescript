// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../models/models.js";
import {
  BodyOptionalityContext as Client,
  Omit204Response,
  RequiredExplicit204Response,
  RequiredImplicit204Response,
  SetModel204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RequiredExplicitOptions,
  RequiredImplicitOptions,
  SetOptions,
  OmitOptions,
} from "../models/options.js";

export function _requiredExplicitSend(
  context: Client,
  body: BodyModel,
  options: RequiredExplicitOptions = { requestOptions: {} },
): StreamableMethod<RequiredExplicit204Response> {
  return context
    .path("/parameters/body-optionality/required-explicit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _requiredExplicitDeserialize(
  result: RequiredExplicit204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requiredExplicit(
  context: Client,
  body: BodyModel,
  options: RequiredExplicitOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredExplicitSend(context, body, options);
  return _requiredExplicitDeserialize(result);
}

export function _requiredImplicitSend(
  context: Client,
  body: BodyModel,
  options: RequiredImplicitOptions = { requestOptions: {} },
): StreamableMethod<RequiredImplicit204Response> {
  return context
    .path("/parameters/body-optionality/required-implicit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _requiredImplicitDeserialize(
  result: RequiredImplicit204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requiredImplicit(
  context: Client,
  body: BodyModel,
  options: RequiredImplicitOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredImplicitSend(context, body, options);
  return _requiredImplicitDeserialize(result);
}

export function _setSend(
  context: Client,
  body: BodyModel,
  options: SetOptions = { requestOptions: {} },
): StreamableMethod<SetModel204Response> {
  return context
    .path("/parameters/body-optionality/optional-explicit/set")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _setDeserialize(
  result: SetModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function set(
  context: Client,
  body: BodyModel,
  options: SetOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _setSend(context, body, options);
  return _setDeserialize(result);
}

export function _omitSend(
  context: Client,
  body: BodyModel,
  options: OmitOptions = { requestOptions: {} },
): StreamableMethod<Omit204Response> {
  return context
    .path("/parameters/body-optionality/optional-explicit/omit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _omitDeserialize(result: Omit204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function omit(
  context: Client,
  body: BodyModel,
  options: OmitOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _omitSend(context, body, options);
  return _omitDeserialize(result);
}
