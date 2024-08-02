// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NewModel } from "../models/models.js";
import { RenamedFromContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NewOpOptionalParams,
  NewOpInNewInterfaceOptionalParams,
} from "../models/options.js";

export function _newOpSend(
  context: Client,
  newQuery: string,
  body: NewModel,
  options: NewOpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { newQuery: newQuery },
      body: {
        newProp: body["newProp"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _newOpDeserialize(
  result: PathUncheckedResponse,
): Promise<NewModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    newProp: result.body["newProp"],
    enumProp: result.body["enumProp"],
    unionProp: result.body["unionProp"],
  };
}

export async function newOp(
  context: Client,
  newQuery: string,
  body: NewModel,
  options: NewOpOptionalParams = { requestOptions: {} },
): Promise<NewModel> {
  const result = await _newOpSend(context, newQuery, body, options);
  return _newOpDeserialize(result);
}

export function _newOpInNewInterfaceSend(
  context: Client,
  body: NewModel,
  options: NewOpInNewInterfaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/interface/test")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        newProp: body["newProp"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _newOpInNewInterfaceDeserialize(
  result: PathUncheckedResponse,
): Promise<NewModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    newProp: result.body["newProp"],
    enumProp: result.body["enumProp"],
    unionProp: result.body["unionProp"],
  };
}

export async function newOpInNewInterface(
  context: Client,
  body: NewModel,
  options: NewOpInNewInterfaceOptionalParams = { requestOptions: {} },
): Promise<NewModel> {
  const result = await _newOpInNewInterfaceSend(context, body, options);
  return _newOpInNewInterfaceDeserialize(result);
}
