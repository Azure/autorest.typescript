// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetUpdateStrategy,
  FleetUpdateStrategyListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContainerServiceContext as Client,
  FleetUpdateStrategiesCreateOrUpdate200Response,
  FleetUpdateStrategiesCreateOrUpdate201Response,
  FleetUpdateStrategiesCreateOrUpdateDefaultResponse,
  FleetUpdateStrategiesCreateOrUpdateLogicalResponse,
  FleetUpdateStrategiesDelete200Response,
  FleetUpdateStrategiesDelete202Response,
  FleetUpdateStrategiesDelete204Response,
  FleetUpdateStrategiesDeleteDefaultResponse,
  FleetUpdateStrategiesDeleteLogicalResponse,
  FleetUpdateStrategiesGet200Response,
  FleetUpdateStrategiesGetDefaultResponse,
  FleetUpdateStrategiesListByFleet200Response,
  FleetUpdateStrategiesListByFleetDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FleetUpdateStrategiesGetOptionalParams,
  FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  FleetUpdateStrategiesDeleteOptionalParams,
  FleetUpdateStrategiesListByFleetOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  options: FleetUpdateStrategiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FleetUpdateStrategiesGet200Response | FleetUpdateStrategiesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateStrategyName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | FleetUpdateStrategiesGet200Response
    | FleetUpdateStrategiesGetDefaultResponse,
): Promise<FleetUpdateStrategy> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          strategy: {
            stages: result.body.properties?.strategy["stages"].map((p) => ({
              name: p["name"],
              groups:
                p["groups"] === undefined
                  ? p["groups"]
                  : p["groups"].map((p) => ({ name: p["name"] })),
              afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
            })),
          },
        },
    eTag: result.body["eTag"],
  };
}

/** Get a FleetUpdateStrategy */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  options: FleetUpdateStrategiesGetOptionalParams = { requestOptions: {} },
): Promise<FleetUpdateStrategy> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    updateStrategyName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  resource: FleetUpdateStrategy,
  options: FleetUpdateStrategiesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | FleetUpdateStrategiesCreateOrUpdate200Response
  | FleetUpdateStrategiesCreateOrUpdate201Response
  | FleetUpdateStrategiesCreateOrUpdateDefaultResponse
  | FleetUpdateStrategiesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateStrategyName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
      body: {
        properties: !resource.properties
          ? undefined
          : {
              strategy: {
                stages: resource.properties?.strategy["stages"].map((p) => ({
                  name: p["name"],
                  groups:
                    p["groups"] === undefined
                      ? p["groups"]
                      : p["groups"].map((p) => ({ name: p["name"] })),
                  afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
                })),
              },
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | FleetUpdateStrategiesCreateOrUpdate200Response
    | FleetUpdateStrategiesCreateOrUpdate201Response
    | FleetUpdateStrategiesCreateOrUpdateDefaultResponse
    | FleetUpdateStrategiesCreateOrUpdateLogicalResponse,
): Promise<FleetUpdateStrategy> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetUpdateStrategiesCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          strategy: {
            stages: result.body.properties?.strategy["stages"].map((p) => ({
              name: p["name"],
              groups:
                p["groups"] === undefined
                  ? p["groups"]
                  : p["groups"].map((p) => ({ name: p["name"] })),
              afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
            })),
          },
        },
    eTag: result.body["eTag"],
  };
}

/** Create a FleetUpdateStrategy */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  resource: FleetUpdateStrategy,
  options: FleetUpdateStrategiesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<FleetUpdateStrategy>, FleetUpdateStrategy> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<FleetUpdateStrategy>, FleetUpdateStrategy>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  options: FleetUpdateStrategiesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetUpdateStrategiesDelete200Response
  | FleetUpdateStrategiesDelete202Response
  | FleetUpdateStrategiesDelete204Response
  | FleetUpdateStrategiesDeleteDefaultResponse
  | FleetUpdateStrategiesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      updateStrategyName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
    });
}

export async function _$deleteDeserialize(
  result:
    | FleetUpdateStrategiesDelete200Response
    | FleetUpdateStrategiesDelete202Response
    | FleetUpdateStrategiesDelete204Response
    | FleetUpdateStrategiesDeleteDefaultResponse
    | FleetUpdateStrategiesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetUpdateStrategiesDeleteLogicalResponse;
  return;
}

/** Delete a FleetUpdateStrategy */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  updateStrategyName: string,
  options: FleetUpdateStrategiesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByFleetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetUpdateStrategiesListByFleetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | FleetUpdateStrategiesListByFleet200Response
  | FleetUpdateStrategiesListByFleetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByFleetDeserialize(
  result:
    | FleetUpdateStrategiesListByFleet200Response
    | FleetUpdateStrategiesListByFleetDefaultResponse,
): Promise<FleetUpdateStrategyListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
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
            provisioningState: p.properties?.["provisioningState"],
            strategy: {
              stages: p.properties?.strategy["stages"].map((p) => ({
                name: p["name"],
                groups:
                  p["groups"] === undefined
                    ? p["groups"]
                    : p["groups"].map((p) => ({ name: p["name"] })),
                afterStageWaitInSeconds: p["afterStageWaitInSeconds"],
              })),
            },
          },
      eTag: p["eTag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List FleetUpdateStrategy resources by Fleet */
export function listByFleet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetUpdateStrategiesListByFleetOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FleetUpdateStrategy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByFleetSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
    _listByFleetDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
