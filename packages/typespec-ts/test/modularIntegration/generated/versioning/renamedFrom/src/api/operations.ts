// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NewModel } from "../models/models.js";
import {
  NewOp200Response,
  NewOpInNewInterface200Response,
  RenamedFromContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NewOpOptionalParams,
  NewOpInNewInterfaceOptionalParams,
} from "./options.js";

export function _newOpSend(
  context: Client,
  newQuery: string,
  body: NewModel,
  options: NewOpOptionalParams = { requestOptions: {} },
): StreamableMethod<NewOp200Response> {
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
  result: NewOp200Response,
): Promise<NewModel> {
  if (result.status !== "200") {
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
): StreamableMethod<NewOpInNewInterface200Response> {
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
  result: NewOpInNewInterface200Response,
): Promise<NewModel> {
  if (result.status !== "200") {
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
