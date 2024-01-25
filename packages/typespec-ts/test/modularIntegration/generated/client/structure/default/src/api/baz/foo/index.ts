// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ServiceContext as Client,
  Seven204Response,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { BazFooSevenOptions } from "../../../models/options.js";

export function _sevenSend(
  context: Client,
  options: BazFooSevenOptions = { requestOptions: {} },
): StreamableMethod<Seven204Response> {
  return context
    .path("/seven")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sevenDeserialize(
  result: Seven204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function seven(
  context: Client,
  options: BazFooSevenOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _sevenSend(context, options);
  return _sevenDeserialize(result);
}
