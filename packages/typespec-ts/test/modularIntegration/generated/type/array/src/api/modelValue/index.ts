// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
import { ArrayContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelValueGetOptionalParams,
  ModelValuePutOptionalParams,
} from "../../models/options.js";

export function _modelValueGetSend(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InnerModel[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p: any) => {
        return {
          property: p["property"],
          children: !p.children ? undefined : p.children,
        };
      });
}

export async function modelValueGet(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): Promise<InnerModel[]> {
  const result = await _modelValueGetSend(context, options);
  return _modelValueGetDeserialize(result);
}

export function _modelValuePutSend(
  context: Client,
  body: InnerModel[],
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/type/array/model").put({
    ...operationOptionsToRequestParameters(options),
    body: (body ?? []).map((p) => {
      return {
        property: p["property"],
        children:
          p["children"] === undefined
            ? p["children"]
            : p["children"].map(innerModelSerializer),
      };
    }),
  });
}

export async function _modelValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelValuePut(
  context: Client,
  body: InnerModel[],
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelValuePutSend(context, body, options);
  return _modelValuePutDeserialize(result);
}
