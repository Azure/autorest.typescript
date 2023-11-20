// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  CollectionFormatContext as Client,
  HeaderCsv204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { RestError, PipelineResponse } from "@azure/core-rest-pipeline";
import { HeaderCsvOptions } from "../../models/options.js";

export function _headerCsvSend(
  context: Client,
  colors: string[],
  options: HeaderCsvOptions = { requestOptions: {} }
): StreamableMethod<HeaderCsv204Response> {
  return context
    .path("/parameters/collection-format/header/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { colors: buildCsvCollection(colors) },
    });
}

export async function _headerCsvDeserialize(
  result: HeaderCsv204Response
): Promise<void> {
  if (result.status !== "204") {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
      response: result.body as PipelineResponse,
    });
  }

  return;
}

export async function headerCsv(
  context: Client,
  colors: string[],
  options: HeaderCsvOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerCsvSend(context, colors, options);
  return _headerCsvDeserialize(result);
}
