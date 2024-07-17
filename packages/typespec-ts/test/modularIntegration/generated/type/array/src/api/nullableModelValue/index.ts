// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
import {
  ArrayContext as Client,
  NullableModelValueGet200Response,
  NullableModelValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableModelValueGetOptionalParams,
  NullableModelValuePutOptionalParams,
} from "../options.js";

export function _nullableModelValueGetSend(
  context: Client,
  options: NullableModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableModelValueGet200Response> {
  return context
    .path("/type/array/nullable-model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableModelValueGetDeserialize(
  result: NullableModelValueGet200Response,
): Promise<(InnerModel | null)[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => {
        return !p
          ? p
          : {
              property: p["property"],
              children:
                p["children"] === undefined
                  ? p["children"]
                  : p["children"].map((p) => {
                      return {
                        property: p["property"],
                        children: !p.children ? undefined : p.children,
                      };
                    }),
            };
      });
}

export async function nullableModelValueGet(
  context: Client,
  options: NullableModelValueGetOptionalParams = { requestOptions: {} },
): Promise<(InnerModel | null)[]> {
  const result = await _nullableModelValueGetSend(context, options);
  return _nullableModelValueGetDeserialize(result);
}

export function _nullableModelValuePutSend(
  context: Client,
  body: (InnerModel | null)[],
  options: NullableModelValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableModelValuePut204Response> {
  return context.path("/type/array/nullable-model").put({
    ...operationOptionsToRequestParameters(options),
    body: (body ?? []).map((p) => {
      return !p
        ? p
        : {
            property: p["property"],
            children:
              p["children"] === undefined
                ? p["children"]
                : p["children"].map(innerModelSerializer),
          };
    }),
  });
}

export async function _nullableModelValuePutDeserialize(
  result: NullableModelValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nullableModelValuePut(
  context: Client,
  body: (InnerModel | null)[],
  options: NullableModelValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableModelValuePutSend(context, body, options);
  return _nullableModelValuePutDeserialize(result);
}
