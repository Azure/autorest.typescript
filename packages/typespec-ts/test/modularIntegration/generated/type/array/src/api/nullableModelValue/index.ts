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
  NullableModelValueGetOptionalParams,
  NullableModelValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableModelValueGetSend(
  context: Client,
  options: NullableModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableModelValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<(InnerModel | null)[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p: any) => {
        return !p
          ? p
          : {
              property: p["property"],
              children:
                p["children"] === undefined
                  ? p["children"]
                  : p["children"].map((p: any) => {
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
