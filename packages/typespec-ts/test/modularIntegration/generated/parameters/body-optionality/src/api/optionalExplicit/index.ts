// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyModel } from "../../models/models.js";
import {
  BodyOptionalityContext as Client,
  Omit204Response,
  SetModel204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  OptionalExplicitSetOptionalParams,
  OptionalExplicitOmitOptionalParams,
} from "../options.js";

export function _setSend(
  context: Client,
  body?: BodyModel,
  options: OptionalExplicitSetOptionalParams = { requestOptions: {} },
): StreamableMethod<SetModel204Response> {
  return context
    .path("/parameters/body-optionality/optional-explicit/set")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: body === undefined ? body : { name: body["name"] },
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
): StreamableMethod<Omit204Response> {
  return context
    .path("/parameters/body-optionality/optional-explicit/omit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: body === undefined ? body : { name: body["name"] },
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
  body?: BodyModel,
  options: OptionalExplicitOmitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _omitSend(context, body, options);
  return _omitDeserialize(result);
}
