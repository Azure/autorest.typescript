// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../models/models.js";
import {
  BodyOptionalityContext as Client,
  RequiredExplicit204Response,
  RequiredImplicit204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RequiredExplicitOptionalParams,
  RequiredImplicitOptionalParams,
} from "../models/options.js";

export function _requiredExplicitSend(
  context: Client,
  body: BodyModel,
  options: RequiredExplicitOptionalParams = { requestOptions: {} },
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
  options: RequiredExplicitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredExplicitSend(context, body, options);
  return _requiredExplicitDeserialize(result);
}

export function _requiredImplicitSend(
  context: Client,
  name: string,
  options: RequiredImplicitOptionalParams = { requestOptions: {} },
): StreamableMethod<RequiredImplicit204Response> {
  return context
    .path("/parameters/body-optionality/required-implicit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
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
  name: string,
  options: RequiredImplicitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredImplicitSend(context, name, options);
  return _requiredImplicitDeserialize(result);
}
