// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AccountListSupportedImagesResult,
  ImageInformation,
  PoolNodeCountsListResult,
  PoolNodeCounts,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  ListPoolNodeCounts200Response,
  ListPoolNodeCountsDefaultResponse,
  ListSupportedImages200Response,
  ListSupportedImagesDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AccountsListSupportedImagesOptions,
  AccountsListPoolNodeCountsOptions,
} from "../../models/options.js";

export function _listSupportedImagesSend(
  context: Client,
  options: AccountsListSupportedImagesOptions = { requestOptions: {} },
): StreamableMethod<
  ListSupportedImages200Response | ListSupportedImagesDefaultResponse
> {
  return context
    .path("/supportedimages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
      },
    });
}

export async function _listSupportedImagesDeserialize(
  result: ListSupportedImages200Response | ListSupportedImagesDefaultResponse,
): Promise<AccountListSupportedImagesResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          nodeAgentSKUId: p["nodeAgentSKUId"],
          imageReference: {
            publisher: p.imageReference["publisher"],
            offer: p.imageReference["offer"],
            sku: p.imageReference["sku"],
            version: p.imageReference["version"],
            virtualMachineImageId: p.imageReference["virtualMachineImageId"],
            exactVersion: p.imageReference["exactVersion"],
          },
          osType: p["osType"],
          capabilities: p["capabilities"],
          batchSupportEndOfLife:
            p["batchSupportEndOfLife"] !== undefined
              ? new Date(p["batchSupportEndOfLife"])
              : undefined,
          verificationType: p["verificationType"],
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export function listSupportedImages(
  context: Client,
  options: AccountsListSupportedImagesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<ImageInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSupportedImagesSend(context, options),
    _listSupportedImagesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listPoolNodeCountsSend(
  context: Client,
  options: AccountsListPoolNodeCountsOptions = { requestOptions: {} },
): StreamableMethod<
  ListPoolNodeCounts200Response | ListPoolNodeCountsDefaultResponse
> {
  return context
    .path("/nodecounts")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
      },
    });
}

export async function _listPoolNodeCountsDeserialize(
  result: ListPoolNodeCounts200Response | ListPoolNodeCountsDefaultResponse,
): Promise<PoolNodeCountsListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          poolId: p["poolId"],
          dedicated: !p.dedicated
            ? undefined
            : {
                creating: p.dedicated?.["creating"],
                idle: p.dedicated?.["idle"],
                offline: p.dedicated?.["offline"],
                preempted: p.dedicated?.["preempted"],
                rebooting: p.dedicated?.["rebooting"],
                reimaging: p.dedicated?.["reimaging"],
                running: p.dedicated?.["running"],
                starting: p.dedicated?.["starting"],
                startTaskFailed: p.dedicated?.["startTaskFailed"],
                leavingPool: p.dedicated?.["leavingPool"],
                unknown: p.dedicated?.["unknown"],
                unusable: p.dedicated?.["unusable"],
                waitingForStartTask: p.dedicated?.["waitingForStartTask"],
                total: p.dedicated?.["total"],
              },
          lowPriority: !p.lowPriority
            ? undefined
            : {
                creating: p.lowPriority?.["creating"],
                idle: p.lowPriority?.["idle"],
                offline: p.lowPriority?.["offline"],
                preempted: p.lowPriority?.["preempted"],
                rebooting: p.lowPriority?.["rebooting"],
                reimaging: p.lowPriority?.["reimaging"],
                running: p.lowPriority?.["running"],
                starting: p.lowPriority?.["starting"],
                startTaskFailed: p.lowPriority?.["startTaskFailed"],
                leavingPool: p.lowPriority?.["leavingPool"],
                unknown: p.lowPriority?.["unknown"],
                unusable: p.lowPriority?.["unusable"],
                waitingForStartTask: p.lowPriority?.["waitingForStartTask"],
                total: p.lowPriority?.["total"],
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
 * numbers returned may not always be up to date. If you need exact node counts,
 * use a list query.
 */
export function listPoolNodeCounts(
  context: Client,
  options: AccountsListPoolNodeCountsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolNodeCounts> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolNodeCountsSend(context, options),
    _listPoolNodeCountsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
