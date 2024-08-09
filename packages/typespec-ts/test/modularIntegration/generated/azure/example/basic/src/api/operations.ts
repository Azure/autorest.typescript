// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  modelSerializer,
  ActionRequest,
  Enum,
  ActionResponse,
} from "../models/models.js";
import { BasicContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import { BasicActionOptionalParams } from "../models/options.js";

export function _basicActionSend(
  context: Client,
  queryParam: string,
  headerParam: string,
  body: ActionRequest,
  options: BasicActionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/example/basic/basic")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "header-param": headerParam },
      queryParameters: { "query-param": queryParam },
      body: {
        stringProperty: body["stringProperty"],
        modelProperty: !body.modelProperty
          ? body.modelProperty
          : modelSerializer(body.modelProperty),
        arrayProperty: body["arrayProperty"],
        recordProperty: !body.recordProperty
          ? body.recordProperty
          : (serializeRecord(body.recordProperty as any) as any),
      },
    });
}

export async function _basicActionDeserialize(
  result: PathUncheckedResponse,
): Promise<ActionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    stringProperty: result.body["stringProperty"],
    modelProperty: !result.body.modelProperty
      ? undefined
      : {
          int32Property: result.body.modelProperty?.["int32Property"],
          float32Property: result.body.modelProperty?.["float32Property"],
          enumProperty: result.body.modelProperty?.["enumProperty"] as Enum,
        },
    arrayProperty: result.body["arrayProperty"],
    recordProperty: result.body["recordProperty"],
  };
}

export async function basicAction(
  context: Client,
  queryParam: string,
  headerParam: string,
  body: ActionRequest,
  options: BasicActionOptionalParams = { requestOptions: {} },
): Promise<ActionResponse> {
  const result = await _basicActionSend(
    context,
    queryParam,
    headerParam,
    body,
    options,
  );
  return _basicActionDeserialize(result);
}
