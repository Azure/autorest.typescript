// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { BazFooSevenOptionalParams } from "../../../models/options.js";

export function _sevenSend(
  context: Client,
  options: BazFooSevenOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/seven")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sevenDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function seven(
  context: Client,
  options: BazFooSevenOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sevenSend(context, options);
  return _sevenDeserialize(result);
}
