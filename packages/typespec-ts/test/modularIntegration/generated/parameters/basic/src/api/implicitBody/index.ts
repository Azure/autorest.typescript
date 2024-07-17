// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BasicContext as Client,
  ImplicitBodySimple204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ImplicitBodySimpleOptionalParams } from "../options.js";

export function _implicitBodySimpleSend(
  context: Client,
  name: string,
  options: ImplicitBodySimpleOptionalParams = { requestOptions: {} },
): StreamableMethod<ImplicitBodySimple204Response> {
  return context
    .path("/parameters/basic/implicit-body/simple")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _implicitBodySimpleDeserialize(
  result: ImplicitBodySimple204Response,
): Promise<void> {
  if (result.status !== "204") {
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
