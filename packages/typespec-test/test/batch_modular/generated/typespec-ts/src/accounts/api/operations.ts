// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AccountsContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  _AccountListSupportedImagesResult,
  _accountListSupportedImagesResultDeserializer,
  ImageInformation,
  _PoolNodeCountsListResult,
  _poolNodeCountsListResultDeserializer,
  PoolNodeCounts,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { ListPoolNodeCountsOptionalParams, ListSupportedImagesOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listPoolNodeCountsSend(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/nodecounts{?api%2Dversion,maxresults,timeOut,%24filter}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
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
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listPoolNodeCountsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolNodeCountsListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _poolNodeCountsListResultDeserializer(result.body);
}

/**
 * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
 * numbers returned may not always be up to date. If you need exact node counts,
 * use a list query.
 */
export function listPoolNodeCounts(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolNodeCounts> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolNodeCountsSend(context, options),
    _listPoolNodeCountsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _listSupportedImagesSend(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/supportedimages{?maxresults,timeOut,%24filter}",
    {
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
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
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listSupportedImagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListSupportedImagesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _accountListSupportedImagesResultDeserializer(result.body);
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export function listSupportedImages(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ImageInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSupportedImagesSend(context, options),
    _listSupportedImagesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
