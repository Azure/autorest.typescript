// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionFormatContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { buildCsvCollection } from "../../helpers/serializerHelpers.js";
import { HeaderCsvOptionalParams } from "../../models/options.js";

export function _headerCsvSend(
  context: Client,
  colors: string[],
  options: HeaderCsvOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/collection-format/header/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { colors: buildCsvCollection(colors) },
    });
}

export async function _headerCsvDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerCsv(
  context: Client,
  colors: string[],
  options: HeaderCsvOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerCsvSend(context, colors, options);
  return _headerCsvDeserialize(result);
}
