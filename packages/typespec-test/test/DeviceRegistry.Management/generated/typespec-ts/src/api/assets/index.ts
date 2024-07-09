// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  assetPropertiesSerializer,
  assetUpdatePropertiesSerializer,
  CreatedByType,
  Asset,
  DataPointsObservabilityMode,
  EventsObservabilityMode,
  AssetUpdate,
  _AssetListResult,
} from "../../models/models.js";
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
import { serializeRecord } from "../../helpers/serializerHelpers.js";
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

  const _result = result as unknown as AssetsGet200Response;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          assetType: _result.body.properties?.["assetType"],
          enabled: _result.body.properties?.["enabled"],
          externalAssetId: _result.body.properties?.["externalAssetId"],
          displayName: _result.body.properties?.["displayName"],
          description: _result.body.properties?.["description"],
          assetEndpointProfileUri:
            _result.body.properties?.["assetEndpointProfileUri"],
          version: _result.body.properties?.["version"],
          manufacturer: _result.body.properties?.["manufacturer"],
          manufacturerUri: _result.body.properties?.["manufacturerUri"],
          model: _result.body.properties?.["model"],
          productCode: _result.body.properties?.["productCode"],
          hardwareRevision: _result.body.properties?.["hardwareRevision"],
          softwareRevision: _result.body.properties?.["softwareRevision"],
          documentationUri: _result.body.properties?.["documentationUri"],
          serialNumber: _result.body.properties?.["serialNumber"],
          attributes: _result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            _result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            _result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            _result.body.properties?.["dataPoints"] === undefined
              ? _result.body.properties?.["dataPoints"]
              : _result.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as DataPointsObservabilityMode,
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            _result.body.properties?.["events"] === undefined
              ? _result.body.properties?.["events"]
              : _result.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as EventsObservabilityMode,
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !_result.body.properties?.status
            ? undefined
            : {
                errors:
                  _result.body.properties?.status?.["errors"] === undefined
                    ? _result.body.properties?.status?.["errors"]
                    : _result.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: _result.body.properties?.status?.["version"],
              },
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : assetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
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

  const _result = result as unknown as AssetsCreateOrReplaceLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          assetType: _result.body.properties?.["assetType"],
          enabled: _result.body.properties?.["enabled"],
          externalAssetId: _result.body.properties?.["externalAssetId"],
          displayName: _result.body.properties?.["displayName"],
          description: _result.body.properties?.["description"],
          assetEndpointProfileUri:
            _result.body.properties?.["assetEndpointProfileUri"],
          version: _result.body.properties?.["version"],
          manufacturer: _result.body.properties?.["manufacturer"],
          manufacturerUri: _result.body.properties?.["manufacturerUri"],
          model: _result.body.properties?.["model"],
          productCode: _result.body.properties?.["productCode"],
          hardwareRevision: _result.body.properties?.["hardwareRevision"],
          softwareRevision: _result.body.properties?.["softwareRevision"],
          documentationUri: _result.body.properties?.["documentationUri"],
          serialNumber: _result.body.properties?.["serialNumber"],
          attributes: _result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            _result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            _result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            _result.body.properties?.["dataPoints"] === undefined
              ? _result.body.properties?.["dataPoints"]
              : _result.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as DataPointsObservabilityMode,
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            _result.body.properties?.["events"] === undefined
              ? _result.body.properties?.["events"]
              : _result.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as EventsObservabilityMode,
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !_result.body.properties?.status
            ? undefined
            : {
                errors:
                  _result.body.properties?.status?.["errors"] === undefined
                    ? _result.body.properties?.status?.["errors"]
                    : _result.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: _result.body.properties?.status?.["version"],
              },
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetUpdatePropertiesSerializer(properties.properties),
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

  const _result = result as unknown as AssetsUpdateLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          assetType: _result.body.properties?.["assetType"],
          enabled: _result.body.properties?.["enabled"],
          externalAssetId: _result.body.properties?.["externalAssetId"],
          displayName: _result.body.properties?.["displayName"],
          description: _result.body.properties?.["description"],
          assetEndpointProfileUri:
            _result.body.properties?.["assetEndpointProfileUri"],
          version: _result.body.properties?.["version"],
          manufacturer: _result.body.properties?.["manufacturer"],
          manufacturerUri: _result.body.properties?.["manufacturerUri"],
          model: _result.body.properties?.["model"],
          productCode: _result.body.properties?.["productCode"],
          hardwareRevision: _result.body.properties?.["hardwareRevision"],
          softwareRevision: _result.body.properties?.["softwareRevision"],
          documentationUri: _result.body.properties?.["documentationUri"],
          serialNumber: _result.body.properties?.["serialNumber"],
          attributes: _result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            _result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            _result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            _result.body.properties?.["dataPoints"] === undefined
              ? _result.body.properties?.["dataPoints"]
              : _result.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as DataPointsObservabilityMode,
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            _result.body.properties?.["events"] === undefined
              ? _result.body.properties?.["events"]
              : _result.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as EventsObservabilityMode,
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !_result.body.properties?.status
            ? undefined
            : {
                errors:
                  _result.body.properties?.status?.["errors"] === undefined
                    ? _result.body.properties?.status?.["errors"]
                    : _result.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: _result.body.properties?.status?.["version"],
              },
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as AssetsListByResourceGroup200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
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
              assetEndpointProfileUri:
                p.properties?.["assetEndpointProfileUri"],
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
                  : p.properties?.["dataPoints"].map((p) => {
                      return {
                        name: p["name"],
                        dataSource: p["dataSource"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p[
                          "observabilityMode"
                        ] as DataPointsObservabilityMode,
                        dataPointConfiguration: p["dataPointConfiguration"],
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p[
                          "observabilityMode"
                        ] as EventsObservabilityMode,
                        eventConfiguration: p["eventConfiguration"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                  },
              provisioningState: p.properties?.["provisioningState"] as any,
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: _result.body["nextLink"],
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
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as AssetsListBySubscription200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
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
              assetEndpointProfileUri:
                p.properties?.["assetEndpointProfileUri"],
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
                  : p.properties?.["dataPoints"].map((p) => {
                      return {
                        name: p["name"],
                        dataSource: p["dataSource"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p[
                          "observabilityMode"
                        ] as DataPointsObservabilityMode,
                        dataPointConfiguration: p["dataPointConfiguration"],
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p[
                          "observabilityMode"
                        ] as EventsObservabilityMode,
                        eventConfiguration: p["eventConfiguration"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                  },
              provisioningState: p.properties?.["provisioningState"] as any,
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: _result.body["nextLink"],
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
