// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesContext as Client } from "../index.js";
import {
  Index,
  indexSerializer,
  indexDeserializer,
  _PagedIndex,
  _pagedIndexDeserializer,
  VersionInfo,
  versionInfoDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  IndexesListLatestOptionalParams,
  IndexesGetNextVersionOptionalParams,
  IndexesGetLatestOptionalParams,
  IndexesListOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
  IndexesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listLatestSend(
  context: Client,
  options: IndexesListLatestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes{?api%2Dversion,top,skip,maxpagesize}",
    {
      "api%2Dversion": context.apiVersion,
      top: options?.top,
      skip: options?.skip,
      maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listLatestDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedIndex> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedIndexDeserializer(result.body);
}

/** List the latest version of each index. Latest is defined by most recent created by date. */
export function listLatest(
  context: Client,
  options: IndexesListLatestOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Index> {
  return buildPagedAsyncIterator(
    context,
    () => _listLatestSend(context, options),
    _listLatestDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getNextVersionSend(
  context: Client,
  name: string,
  options: IndexesGetNextVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes/{name}:getNextVersion{?api%2Dversion}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNextVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<VersionInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return versionInfoDeserializer(result.body);
}

/** Get next Index version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
export async function getNextVersion(
  context: Client,
  name: string,
  options: IndexesGetNextVersionOptionalParams = { requestOptions: {} },
): Promise<VersionInfo> {
  const result = await _getNextVersionSend(context, name, options);
  return _getNextVersionDeserialize(result);
}

export function _getLatestSend(
  context: Client,
  name: string,
  options: IndexesGetLatestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes/{name}{?api%2Dversion}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getLatestDeserialize(
  result: PathUncheckedResponse,
): Promise<Index> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return indexDeserializer(result.body);
}

/** Get latest version of the Index. Latest is defined by most recent created by date. */
export async function getLatest(
  context: Client,
  name: string,
  options: IndexesGetLatestOptionalParams = { requestOptions: {} },
): Promise<Index> {
  const result = await _getLatestSend(context, name, options);
  return _getLatestDeserialize(result);
}

export function _listSend(
  context: Client,
  name: string,
  listViewType: string,
  options: IndexesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes/{name}/versions{?api%2Dversion,listViewType,orderby,tags,top,skip,maxpagesize}",
    {
      name: name,
      "api%2Dversion": context.apiVersion,
      listViewType: listViewType,
      orderby: options?.orderby,
      tags: options?.tags,
      top: options?.top,
      skip: options?.skip,
      maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedIndex> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedIndexDeserializer(result.body);
}

/** List the versions of an Index given the name. */
export function list(
  context: Client,
  name: string,
  listViewType: string,
  options: IndexesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Index> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, name, listViewType, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  name: string,
  version: string,
  body: Index,
  options: IndexesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes/{name}/versions/{version}{?api%2Dversion}",
    {
      name: name,
      version: version,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: indexSerializer(body),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Index> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return indexDeserializer(result.body);
}

/** Creates or updates a IndexVersion. */
export async function createOrUpdate(
  context: Client,
  name: string,
  version: string,
  body: Index,
  options: IndexesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Index> {
  const result = await _createOrUpdateSend(
    context,
    name,
    version,
    body,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  name: string,
  version: string,
  options: IndexesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes/{name}/versions/{version}{?api%2Dversion}",
    {
      name: name,
      version: version,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Index> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return indexDeserializer(result.body);
}

/** Get a specific version of an Index. */
export async function get(
  context: Client,
  name: string,
  version: string,
  options: IndexesGetOptionalParams = { requestOptions: {} },
): Promise<Index> {
  const result = await _getSend(context, name, version, options);
  return _getDeserialize(result);
}
