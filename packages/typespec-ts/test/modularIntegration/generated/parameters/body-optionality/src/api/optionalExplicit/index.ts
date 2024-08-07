// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../../models/models.js";
import { BodyOptionalityContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  OptionalExplicitSetOptionalParams,
  OptionalExplicitOmitOptionalParams,
} from "../../models/options.js";

export function _setSend(
  context: Client,
  body?: BodyModel,
  options: OptionalExplicitSetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/body-optionality/optional-explicit/set")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: body === undefined ? body : { name: body["name"] },
    });
}

export async function _setDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function set(
  context: Client,
  body?: BodyModel,
  options: OptionalExplicitSetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _setSend(context, body, options);
  return _setDeserialize(result);
}

export function _omitSend(
  context: Client,
  body?: BodyModel,
  options: OptionalExplicitOmitOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/body-optionality/optional-explicit/omit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: body === undefined ? body : { name: body["name"] },
    });
}

export async function _omitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function omit(
  context: Client,
  body?: BodyModel,
  options: OptionalExplicitOmitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _omitSend(context, body, options);
  return _omitDeserialize(result);
}
