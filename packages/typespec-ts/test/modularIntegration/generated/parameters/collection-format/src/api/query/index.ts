// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildMultiCollection,
  buildPipeCollection,
  buildSsvCollection,
  buildTsvCollection,
  CollectionFormatContext as Client,
  QueryCsv204Response,
  QueryMulti204Response,
  QueryPipes204Response,
  QuerySsv204Response,
  QueryTsv204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  QueryMultiOptions,
  QuerySsvOptions,
  QueryTsvOptions,
  QueryPipesOptions,
  QueryCsvOptions,
} from "../../models/options.js";

export function _queryMultiSend(
  context: Client,
  colors: string[],
  options: QueryMultiOptions = { requestOptions: {} },
): StreamableMethod<QueryMulti204Response> {
  return context
    .path("/parameters/collection-format/query/multi")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildMultiCollection(colors, "colors") },
    });
}

export async function _queryMultiDeserialize(
  result: QueryMulti204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryMulti(
  context: Client,
  colors: string[],
  options: QueryMultiOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryMultiSend(context, colors, options);
  return _queryMultiDeserialize(result);
}

export function _querySsvSend(
  context: Client,
  colors: string[],
  options: QuerySsvOptions = { requestOptions: {} },
): StreamableMethod<QuerySsv204Response> {
  return context
    .path("/parameters/collection-format/query/ssv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildSsvCollection(colors) },
    });
}

export async function _querySsvDeserialize(
  result: QuerySsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function querySsv(
  context: Client,
  colors: string[],
  options: QuerySsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _querySsvSend(context, colors, options);
  return _querySsvDeserialize(result);
}

export function _queryTsvSend(
  context: Client,
  colors: string[],
  options: QueryTsvOptions = { requestOptions: {} },
): StreamableMethod<QueryTsv204Response> {
  return context
    .path("/parameters/collection-format/query/tsv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildTsvCollection(colors) },
    });
}

export async function _queryTsvDeserialize(
  result: QueryTsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryTsv(
  context: Client,
  colors: string[],
  options: QueryTsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryTsvSend(context, colors, options);
  return _queryTsvDeserialize(result);
}

export function _queryPipesSend(
  context: Client,
  colors: string[],
  options: QueryPipesOptions = { requestOptions: {} },
): StreamableMethod<QueryPipes204Response> {
  return context
    .path("/parameters/collection-format/query/pipes")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildPipeCollection(colors) },
    });
}

export async function _queryPipesDeserialize(
  result: QueryPipes204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryPipes(
  context: Client,
  colors: string[],
  options: QueryPipesOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryPipesSend(context, colors, options);
  return _queryPipesDeserialize(result);
}

export function _queryCsvSend(
  context: Client,
  colors: string[],
  options: QueryCsvOptions = { requestOptions: {} },
): StreamableMethod<QueryCsv204Response> {
  return context
    .path("/parameters/collection-format/query/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: colors },
    });
}

export async function _queryCsvDeserialize(
  result: QueryCsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryCsv(
  context: Client,
  colors: string[],
  options: QueryCsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryCsvSend(context, colors, options);
  return _queryCsvDeserialize(result);
}
