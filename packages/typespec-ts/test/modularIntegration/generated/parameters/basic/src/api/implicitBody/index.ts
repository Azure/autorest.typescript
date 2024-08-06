// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BasicContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ImplicitBodySimpleOptionalParams } from "../../models/options.js";

export function _implicitBodySimpleSend(
  context: Client,
  name: string,
  options: ImplicitBodySimpleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/basic/implicit-body/simple")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _implicitBodySimpleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function implicitBodySimple(
  context: Client,
  name: string,
  options: ImplicitBodySimpleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _implicitBodySimpleSend(context, name, options);
  return _implicitBodySimpleDeserialize(result);
}
