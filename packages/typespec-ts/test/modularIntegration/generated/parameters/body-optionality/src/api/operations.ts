// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../models/models.js";
import { BodyOptionalityContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/parameters/body-optionality/required-explicit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _requiredExplicitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/parameters/body-optionality/required-implicit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _requiredImplicitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
