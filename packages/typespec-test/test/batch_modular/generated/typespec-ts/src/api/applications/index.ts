// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationListResult,
  BatchApplication,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  GetApplication200Response,
  GetApplicationDefaultResponse,
  ListApplications200Response,
  ListApplicationsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ApplicationsListApplicationsOptions,
  ApplicationsGetApplicationOptions,
} from "../../models/options.js";

export function _listApplicationsSend(
  context: Client,
  options: ApplicationsListApplicationsOptions = { requestOptions: {} },
): StreamableMethod<
  ListApplications200Response | ListApplicationsDefaultResponse
> {
  return context
    .path("/applications")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
      },
    });
}

export async function _listApplicationsDeserialize(
  result: ListApplications200Response | ListApplicationsDefaultResponse,
): Promise<ApplicationListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          id: p["id"],
          displayName: p["displayName"],
          versions: p["versions"],
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
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
  options: ApplicationsListApplicationsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchApplication> {
  return buildPagedAsyncIterator(
    context,
    () => _listApplicationsSend(context, options),
    _listApplicationsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getApplicationSend(
  context: Client,
  applicationId: string,
  options: ApplicationsGetApplicationOptions = { requestOptions: {} },
): StreamableMethod<GetApplication200Response | GetApplicationDefaultResponse> {
  return context
    .path("/applications/{applicationId}", applicationId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getApplicationDeserialize(
  result: GetApplication200Response | GetApplicationDefaultResponse,
): Promise<BatchApplication> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    versions: result.body["versions"],
  };
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
  options: ApplicationsGetApplicationOptions = { requestOptions: {} },
): Promise<BatchApplication> {
  const result = await _getApplicationSend(context, applicationId, options);
  return _getApplicationDeserialize(result);
}
