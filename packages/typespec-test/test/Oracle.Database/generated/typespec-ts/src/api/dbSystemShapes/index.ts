// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DbSystemShape, DbSystemShapeListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  DbSystemShapesGet200Response,
  DbSystemShapesGetDefaultResponse,
  DbSystemShapesListByLocation200Response,
  DbSystemShapesListByLocationDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DbSystemShapesGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DbSystemShapesGet200Response | DbSystemShapesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes/{dbsystemshapename}",
      subscriptionId,
      location,
      dbsystemshapename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DbSystemShapesGet200Response | DbSystemShapesGetDefaultResponse,
): Promise<DbSystemShape> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          shapeFamily: result.body.properties?.["shapeFamily"],
          availableCoreCount: result.body.properties?.["availableCoreCount"],
          minimumCoreCount: result.body.properties?.["minimumCoreCount"],
          runtimeMinimumCoreCount:
            result.body.properties?.["runtimeMinimumCoreCount"],
          coreCountIncrement: result.body.properties?.["coreCountIncrement"],
          minStorageCount: result.body.properties?.["minStorageCount"],
          maxStorageCount: result.body.properties?.["maxStorageCount"],
          availableDataStoragePerServerInTbs:
            result.body.properties?.["availableDataStoragePerServerInTbs"],
          availableMemoryPerNodeInGbs:
            result.body.properties?.["availableMemoryPerNodeInGbs"],
          availableDbNodePerNodeInGbs:
            result.body.properties?.["availableDbNodePerNodeInGbs"],
          minCoreCountPerNode: result.body.properties?.["minCoreCountPerNode"],
          availableMemoryInGbs:
            result.body.properties?.["availableMemoryInGbs"],
          minMemoryPerNodeInGbs:
            result.body.properties?.["minMemoryPerNodeInGbs"],
          availableDbNodeStorageInGbs:
            result.body.properties?.["availableDbNodeStorageInGbs"],
          minDbNodeStoragePerNodeInGbs:
            result.body.properties?.["minDbNodeStoragePerNodeInGbs"],
          availableDataStorageInTbs:
            result.body.properties?.["availableDataStorageInTbs"],
          minDataStorageInTbs: result.body.properties?.["minDataStorageInTbs"],
          minimumNodeCount: result.body.properties?.["minimumNodeCount"],
          maximumNodeCount: result.body.properties?.["maximumNodeCount"],
          availableCoreCountPerNode:
            result.body.properties?.["availableCoreCountPerNode"],
        },
  };
}

/** Get a DbSystemShape */
export async function get(
  context: Client,
  subscriptionId: string,
  location: string,
  dbsystemshapename: string,
  options: DbSystemShapesGetOptionalParams = { requestOptions: {} },
): Promise<DbSystemShape> {
  const result = await _getSend(
    context,
    subscriptionId,
    location,
    dbsystemshapename,
    options,
  );
  return _getDeserialize(result);
}

export function _listByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DbSystemShapesListByLocation200Response
  | DbSystemShapesListByLocationDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByLocationDeserialize(
  result:
    | DbSystemShapesListByLocation200Response
    | DbSystemShapesListByLocationDefaultResponse,
): Promise<DbSystemShapeListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            shapeFamily: p.properties?.["shapeFamily"],
            availableCoreCount: p.properties?.["availableCoreCount"],
            minimumCoreCount: p.properties?.["minimumCoreCount"],
            runtimeMinimumCoreCount: p.properties?.["runtimeMinimumCoreCount"],
            coreCountIncrement: p.properties?.["coreCountIncrement"],
            minStorageCount: p.properties?.["minStorageCount"],
            maxStorageCount: p.properties?.["maxStorageCount"],
            availableDataStoragePerServerInTbs:
              p.properties?.["availableDataStoragePerServerInTbs"],
            availableMemoryPerNodeInGbs:
              p.properties?.["availableMemoryPerNodeInGbs"],
            availableDbNodePerNodeInGbs:
              p.properties?.["availableDbNodePerNodeInGbs"],
            minCoreCountPerNode: p.properties?.["minCoreCountPerNode"],
            availableMemoryInGbs: p.properties?.["availableMemoryInGbs"],
            minMemoryPerNodeInGbs: p.properties?.["minMemoryPerNodeInGbs"],
            availableDbNodeStorageInGbs:
              p.properties?.["availableDbNodeStorageInGbs"],
            minDbNodeStoragePerNodeInGbs:
              p.properties?.["minDbNodeStoragePerNodeInGbs"],
            availableDataStorageInTbs:
              p.properties?.["availableDataStorageInTbs"],
            minDataStorageInTbs: p.properties?.["minDataStorageInTbs"],
            minimumNodeCount: p.properties?.["minimumNodeCount"],
            maximumNodeCount: p.properties?.["maximumNodeCount"],
            availableCoreCountPerNode:
              p.properties?.["availableCoreCountPerNode"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List DbSystemShape resources by Location */
export function listByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DbSystemShapesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbSystemShape> {
  return buildPagedAsyncIterator(
    context,
    () => _listByLocationSend(context, subscriptionId, location, options),
    _listByLocationDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
