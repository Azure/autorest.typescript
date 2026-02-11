// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ApplicationsContext as Client } from "./index.js";
import {
  _ApplicationListResult,
  _applicationListResultDeserializer,
  BatchApplication,
  batchApplicationDeserializer,
  batchErrorDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { GetApplicationOptionalParams, ListApplicationsOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getApplicationSend(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/applications/{applicationId}{?api%2Dversion,timeOut}",
    {
      applicationId: applicationId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
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
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getApplicationDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchApplication> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchApplicationDeserializer(result.body);
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about Applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function getApplication(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): Promise<BatchApplication> {
  const result = await _getApplicationSend(context, applicationId, options);
  return _getApplicationDeserialize(result);
}

export function _listApplicationsSend(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/applications{?api%2Dversion,maxresults,timeOut}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
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

export async function _listApplicationsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _applicationListResultDeserializer(result.body);
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export function listApplications(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchApplication> {
  return buildPagedAsyncIterator(
    context,
    () => _listApplicationsSend(context, options),
    _listApplicationsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}
