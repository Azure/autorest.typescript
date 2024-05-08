// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Asset, AssetUpdate, AssetListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  AssetsCreateOrReplace200Response,
  AssetsCreateOrReplace201Response,
  AssetsCreateOrReplaceDefaultResponse,
  AssetsCreateOrReplaceLogicalResponse,
  AssetsDelete202Response,
  AssetsDelete204Response,
  AssetsDeleteDefaultResponse,
  AssetsDeleteLogicalResponse,
  AssetsGet200Response,
  AssetsGetDefaultResponse,
  AssetsListByResourceGroup200Response,
  AssetsListByResourceGroupDefaultResponse,
  AssetsListBySubscription200Response,
  AssetsListBySubscriptionDefaultResponse,
  AssetsUpdate200Response,
  AssetsUpdate202Response,
  AssetsUpdateDefaultResponse,
  AssetsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<AssetsGet200Response | AssetsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AssetsGet200Response | AssetsGetDefaultResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a Asset */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsCreateOrReplace200Response
  | AssetsCreateOrReplace201Response
  | AssetsCreateOrReplaceDefaultResponse
  | AssetsCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              assetType: resource.properties?.["assetType"],
              enabled: resource.properties?.["enabled"],
              externalAssetId: resource.properties?.["externalAssetId"],
              displayName: resource.properties?.["displayName"],
              description: resource.properties?.["description"],
              assetEndpointProfileUri:
                resource.properties?.["assetEndpointProfileUri"],
              manufacturer: resource.properties?.["manufacturer"],
              manufacturerUri: resource.properties?.["manufacturerUri"],
              model: resource.properties?.["model"],
              productCode: resource.properties?.["productCode"],
              hardwareRevision: resource.properties?.["hardwareRevision"],
              softwareRevision: resource.properties?.["softwareRevision"],
              documentationUri: resource.properties?.["documentationUri"],
              serialNumber: resource.properties?.["serialNumber"],
              attributes: resource.properties?.["attributes"],
              defaultDataPointsConfiguration:
                resource.properties?.["defaultDataPointsConfiguration"],
              defaultEventsConfiguration:
                resource.properties?.["defaultEventsConfiguration"],
              dataPoints:
                resource.properties?.["dataPoints"] === undefined
                  ? resource.properties?.["dataPoints"]
                  : resource.properties?.["dataPoints"].map((p) => ({
                      name: p["name"],
                      dataSource: p["dataSource"],
                      capabilityId: p["capabilityId"],
                      observabilityMode: p["observabilityMode"],
                      dataPointConfiguration: p["dataPointConfiguration"],
                    })),
              events:
                resource.properties?.["events"] === undefined
                  ? resource.properties?.["events"]
                  : resource.properties?.["events"].map((p) => ({
                      name: p["name"],
                      eventNotifier: p["eventNotifier"],
                      capabilityId: p["capabilityId"],
                      observabilityMode: p["observabilityMode"],
                      eventConfiguration: p["eventConfiguration"],
                    })),
            },
        extendedLocation: {
          type: resource.extendedLocation["type"],
          name: resource.extendedLocation["name"],
        },
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | AssetsCreateOrReplace200Response
    | AssetsCreateOrReplace201Response
    | AssetsCreateOrReplaceDefaultResponse
    | AssetsCreateOrReplaceLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetsCreateOrReplaceLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a Asset */
export function createOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Asset>, Asset>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsUpdate200Response
  | AssetsUpdate202Response
  | AssetsUpdateDefaultResponse
  | AssetsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: properties["tags"],
        properties: !properties.properties
          ? undefined
          : {
              assetType: properties.properties?.["assetType"],
              enabled: properties.properties?.["enabled"],
              displayName: properties.properties?.["displayName"],
              description: properties.properties?.["description"],
              manufacturer: properties.properties?.["manufacturer"],
              manufacturerUri: properties.properties?.["manufacturerUri"],
              model: properties.properties?.["model"],
              productCode: properties.properties?.["productCode"],
              hardwareRevision: properties.properties?.["hardwareRevision"],
              softwareRevision: properties.properties?.["softwareRevision"],
              documentationUri: properties.properties?.["documentationUri"],
              serialNumber: properties.properties?.["serialNumber"],
              attributes: properties.properties?.["attributes"],
              defaultDataPointsConfiguration:
                properties.properties?.["defaultDataPointsConfiguration"],
              defaultEventsConfiguration:
                properties.properties?.["defaultEventsConfiguration"],
              dataPoints:
                properties.properties?.["dataPoints"] === undefined
                  ? properties.properties?.["dataPoints"]
                  : properties.properties?.["dataPoints"].map((p) => ({
                      name: p["name"],
                      dataSource: p["dataSource"],
                      capabilityId: p["capabilityId"],
                      observabilityMode: p["observabilityMode"],
                      dataPointConfiguration: p["dataPointConfiguration"],
                    })),
              events:
                properties.properties?.["events"] === undefined
                  ? properties.properties?.["events"]
                  : properties.properties?.["events"].map((p) => ({
                      name: p["name"],
                      eventNotifier: p["eventNotifier"],
                      capabilityId: p["capabilityId"],
                      observabilityMode: p["observabilityMode"],
                      eventConfiguration: p["eventConfiguration"],
                    })),
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | AssetsUpdate200Response
    | AssetsUpdate202Response
    | AssetsUpdateDefaultResponse
    | AssetsUpdateLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetsUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p["observabilityMode"],
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a Asset */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Asset>, Asset>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsDelete202Response
  | AssetsDelete204Response
  | AssetsDeleteDefaultResponse
  | AssetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AssetsDelete202Response
    | AssetsDelete204Response
    | AssetsDeleteDefaultResponse
    | AssetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetsDeleteLogicalResponse;
  return;
}

/** Delete a Asset */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsListByResourceGroup200Response
  | AssetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AssetsListByResourceGroup200Response
    | AssetsListByResourceGroupDefaultResponse,
): Promise<AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            uuid: p.properties?.["uuid"],
            assetType: p.properties?.["assetType"],
            enabled: p.properties?.["enabled"],
            externalAssetId: p.properties?.["externalAssetId"],
            displayName: p.properties?.["displayName"],
            description: p.properties?.["description"],
            assetEndpointProfileUri: p.properties?.["assetEndpointProfileUri"],
            version: p.properties?.["version"],
            manufacturer: p.properties?.["manufacturer"],
            manufacturerUri: p.properties?.["manufacturerUri"],
            model: p.properties?.["model"],
            productCode: p.properties?.["productCode"],
            hardwareRevision: p.properties?.["hardwareRevision"],
            softwareRevision: p.properties?.["softwareRevision"],
            documentationUri: p.properties?.["documentationUri"],
            serialNumber: p.properties?.["serialNumber"],
            attributes: p.properties?.["attributes"],
            defaultDataPointsConfiguration:
              p.properties?.["defaultDataPointsConfiguration"],
            defaultEventsConfiguration:
              p.properties?.["defaultEventsConfiguration"],
            dataPoints:
              p.properties?.["dataPoints"] === undefined
                ? p.properties?.["dataPoints"]
                : p.properties?.["dataPoints"].map((p) => ({
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    dataPointConfiguration: p["dataPointConfiguration"],
                  })),
            events:
              p.properties?.["events"] === undefined
                ? p.properties?.["events"]
                : p.properties?.["events"].map((p) => ({
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    eventConfiguration: p["eventConfiguration"],
                  })),
            status: !p.properties?.status
              ? undefined
              : {
                  errors:
                    p.properties?.status?.["errors"] === undefined
                      ? p.properties?.status?.["errors"]
                      : p.properties?.status?.["errors"].map((p) => ({
                          code: p["code"],
                          message: p["message"],
                        })),
                  version: p.properties?.status?.["version"],
                },
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AssetsListBySubscription200Response | AssetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AssetsListBySubscription200Response
    | AssetsListBySubscriptionDefaultResponse,
): Promise<AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            uuid: p.properties?.["uuid"],
            assetType: p.properties?.["assetType"],
            enabled: p.properties?.["enabled"],
            externalAssetId: p.properties?.["externalAssetId"],
            displayName: p.properties?.["displayName"],
            description: p.properties?.["description"],
            assetEndpointProfileUri: p.properties?.["assetEndpointProfileUri"],
            version: p.properties?.["version"],
            manufacturer: p.properties?.["manufacturer"],
            manufacturerUri: p.properties?.["manufacturerUri"],
            model: p.properties?.["model"],
            productCode: p.properties?.["productCode"],
            hardwareRevision: p.properties?.["hardwareRevision"],
            softwareRevision: p.properties?.["softwareRevision"],
            documentationUri: p.properties?.["documentationUri"],
            serialNumber: p.properties?.["serialNumber"],
            attributes: p.properties?.["attributes"],
            defaultDataPointsConfiguration:
              p.properties?.["defaultDataPointsConfiguration"],
            defaultEventsConfiguration:
              p.properties?.["defaultEventsConfiguration"],
            dataPoints:
              p.properties?.["dataPoints"] === undefined
                ? p.properties?.["dataPoints"]
                : p.properties?.["dataPoints"].map((p) => ({
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    dataPointConfiguration: p["dataPointConfiguration"],
                  })),
            events:
              p.properties?.["events"] === undefined
                ? p.properties?.["events"]
                : p.properties?.["events"].map((p) => ({
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    eventConfiguration: p["eventConfiguration"],
                  })),
            status: !p.properties?.status
              ? undefined
              : {
                  errors:
                    p.properties?.status?.["errors"] === undefined
                      ? p.properties?.status?.["errors"]
                      : p.properties?.status?.["errors"].map((p) => ({
                          code: p["code"],
                          message: p["message"],
                        })),
                  version: p.properties?.status?.["version"],
                },
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
