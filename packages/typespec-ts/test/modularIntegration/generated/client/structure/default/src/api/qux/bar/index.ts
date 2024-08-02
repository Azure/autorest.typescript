// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { QuxBarNineOptionalParams } from "../../../models/options.js";

export function _nineSend(
  context: Client,
  options: QuxBarNineOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/nine")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _nineDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function nine(
  context: Client,
  options: QuxBarNineOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nineSend(context, options);
  return _nineDeserialize(result);
}
