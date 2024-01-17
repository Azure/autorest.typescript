// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  buildMultiCollection,
  buildPipeCollection,
  buildSsvCollection,
  buildTsvCollection,
  CollectionFormatContext as Client,
  HeaderCsv204Response,
  QueryCsv204Response,
  QueryMulti204Response,
  QueryPipes204Response,
  QuerySsv204Response,
  QueryTsv204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  MultiOptions,
  SsvOptions,
  TsvOptions,
  PipesOptions,
  CsvOptions,
} from "../models/options.js";

export function _multiSend(
  context: Client,
  colors: string[],
  options: MultiOptions = { requestOptions: {} },
): StreamableMethod<QueryMulti204Response> {
  return context
    .path("/parameters/collection-format/query/multi")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildMultiCollection(colors, "colors") },
    });
}

export async function _multiDeserialize(
  result: QueryMulti204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function multi(
  context: Client,
  colors: string[],
  options: MultiOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _multiSend(context, colors, options);
  return _multiDeserialize(result);
}

export function _ssvSend(
  context: Client,
  colors: string[],
  options: SsvOptions = { requestOptions: {} },
): StreamableMethod<QuerySsv204Response> {
  return context
    .path("/parameters/collection-format/query/ssv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildSsvCollection(colors) },
    });
}

export async function _ssvDeserialize(
  result: QuerySsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function ssv(
  context: Client,
  colors: string[],
  options: SsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _ssvSend(context, colors, options);
  return _ssvDeserialize(result);
}

export function _tsvSend(
  context: Client,
  colors: string[],
  options: TsvOptions = { requestOptions: {} },
): StreamableMethod<QueryTsv204Response> {
  return context
    .path("/parameters/collection-format/query/tsv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildTsvCollection(colors) },
    });
}

export async function _tsvDeserialize(
  result: QueryTsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function tsv(
  context: Client,
  colors: string[],
  options: TsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _tsvSend(context, colors, options);
  return _tsvDeserialize(result);
}

export function _pipesSend(
  context: Client,
  colors: string[],
  options: PipesOptions = { requestOptions: {} },
): StreamableMethod<QueryPipes204Response> {
  return context
    .path("/parameters/collection-format/query/pipes")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildPipeCollection(colors) },
    });
}

export async function _pipesDeserialize(
  result: QueryPipes204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function pipes(
  context: Client,
  colors: string[],
  options: PipesOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _pipesSend(context, colors, options);
  return _pipesDeserialize(result);
}

export function _csvSend(
  context: Client,
  colors: string[],
  options: CsvOptions = { requestOptions: {} },
): StreamableMethod<QueryCsv204Response> {
  return context
    .path("/parameters/collection-format/query/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: colors },
    });
}

export async function _csvDeserialize(
  result: QueryCsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function csv(
  context: Client,
  colors: string[],
  options: CsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _csvSend(context, colors, options);
  return _csvDeserialize(result);
}

export function _csvSend(
  context: Client,
  colors: string[],
  options: CsvOptions = { requestOptions: {} },
): StreamableMethod<HeaderCsv204Response> {
  return context
    .path("/parameters/collection-format/header/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { colors: buildCsvCollection(colors) },
    });
}

export async function _csvDeserialize(
  result: HeaderCsv204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function csv(
  context: Client,
  colors: string[],
  options: CsvOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _csvSend(context, colors, options);
  return _csvDeserialize(result);
}
