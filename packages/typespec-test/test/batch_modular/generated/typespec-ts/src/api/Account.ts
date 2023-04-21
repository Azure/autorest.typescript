// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import {
  AccountListSupportedImagesResult,
  PoolNodeCountsListResult,
} from "./models.js";

export interface AccountListSupportedImagesOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  $filter?: string;
  /** Accept header. */
  accept?: "application/json";
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export async function listSupportedImages(
  context: Client,
  options: AccountListSupportedImagesOptions = { requestOptions: {} }
): Promise<AccountListSupportedImagesResult> {
  const result = await context.path("/supportedimages").get({
    headers: {
      ...(options.ocpDate && { "ocp-date": options.ocpDate }),
      ...(options.clientRequestId && {
        "client-request-id": options.clientRequestId,
      }),
      ...(options.returnClientRequestId && {
        "return-client-request-id": options.returnClientRequestId,
      }),
      Accept: "application/json",
      ...options.requestOptions?.headers,
    },
    queryParameters: {
      ...(options.maxresults && { maxresults: options.maxresults }),
      ...(options.timeOut && { timeOut: options.timeOut }),
      ...(options.$filter && { $filter: options.$filter }),
    },
  });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
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
      batchSupportEndOfLife: new Date(p["batchSupportEndOfLife"] ?? ""),
      verificationType: p["verificationType"],
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

export interface AccountListPoolNodeCountsOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
   */
  $filter?: string;
  /** Accept header. */
  accept?: "application/json";
}

/**
 * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
 * numbers returned may not always be up to date. If you need exact node counts,
 * use a list query.
 */
export async function listPoolNodeCounts(
  context: Client,
  options: AccountListPoolNodeCountsOptions = { requestOptions: {} }
): Promise<PoolNodeCountsListResult> {
  const result = await context.path("/nodecounts").get({
    headers: {
      ...(options.ocpDate && { "ocp-date": options.ocpDate }),
      ...(options.clientRequestId && {
        "client-request-id": options.clientRequestId,
      }),
      ...(options.returnClientRequestId && {
        "return-client-request-id": options.returnClientRequestId,
      }),
      Accept: "application/json",
      ...options.requestOptions?.headers,
    },
    queryParameters: {
      ...(options.maxresults && { maxresults: options.maxresults }),
      ...(options.timeOut && { timeOut: options.timeOut }),
      ...(options.$filter && { $filter: options.$filter }),
    },
  });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
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
