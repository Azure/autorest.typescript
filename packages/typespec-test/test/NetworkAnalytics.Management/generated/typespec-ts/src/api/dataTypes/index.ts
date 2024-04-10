// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DataType,
  DataTypeUpdate,
  ContainerSaS,
  ContainerSasToken,
  DataTypeListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  DataTypesCreate200Response,
  DataTypesCreate201Response,
  DataTypesCreateDefaultResponse,
  DataTypesCreateLogicalResponse,
  DataTypesDelete202Response,
  DataTypesDelete204Response,
  DataTypesDeleteData202Response,
  DataTypesDeleteData204Response,
  DataTypesDeleteDataDefaultResponse,
  DataTypesDeleteDataLogicalResponse,
  DataTypesDeleteDefaultResponse,
  DataTypesDeleteLogicalResponse,
  DataTypesGenerateStorageContainerSasToken200Response,
  DataTypesGenerateStorageContainerSasTokenDefaultResponse,
  DataTypesGet200Response,
  DataTypesGetDefaultResponse,
  DataTypesListByDataProduct200Response,
  DataTypesListByDataProductDefaultResponse,
  DataTypesUpdate200Response,
  DataTypesUpdate202Response,
  DataTypesUpdateDefaultResponse,
  DataTypesUpdateLogicalResponse,
  isUnexpected,
  NetworkAnalyticsContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DataTypesCreateOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesUpdateOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesListByDataProductOptionalParams,
} from "../../models/options.js";

export function _dataTypesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: DataTypesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataTypesCreate200Response
  | DataTypesCreate201Response
  | DataTypesCreateDefaultResponse
  | DataTypesCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              state: resource.properties?.["state"],
              storageOutputRetention:
                resource.properties?.["storageOutputRetention"],
              databaseCacheRetention:
                resource.properties?.["databaseCacheRetention"],
              databaseRetention: resource.properties?.["databaseRetention"],
            },
      },
    });
}

export async function _dataTypesCreateDeserialize(
  result:
    | DataTypesCreate200Response
    | DataTypesCreate201Response
    | DataTypesCreateDefaultResponse
    | DataTypesCreateLogicalResponse,
): Promise<DataType> {
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
          state: result.body.properties?.["state"],
          stateReason: result.body.properties?.["stateReason"],
          storageOutputRetention:
            result.body.properties?.["storageOutputRetention"],
          databaseCacheRetention:
            result.body.properties?.["databaseCacheRetention"],
          databaseRetention: result.body.properties?.["databaseRetention"],
          visualizationUrl: result.body.properties?.["visualizationUrl"],
        },
  };
}

/** Create data type resource. */
export async function dataTypesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: DataTypesCreateOptionalParams = { requestOptions: {} },
): Promise<DataType> {
  const result = await _dataTypesCreateSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    resource,
    options,
  );
  return _dataTypesCreateDeserialize(result);
}

export function _dataTypesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DataTypesGet200Response | DataTypesGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataTypesGetDeserialize(
  result: DataTypesGet200Response | DataTypesGetDefaultResponse,
): Promise<DataType> {
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
          state: result.body.properties?.["state"],
          stateReason: result.body.properties?.["stateReason"],
          storageOutputRetention:
            result.body.properties?.["storageOutputRetention"],
          databaseCacheRetention:
            result.body.properties?.["databaseCacheRetention"],
          databaseRetention: result.body.properties?.["databaseRetention"],
          visualizationUrl: result.body.properties?.["visualizationUrl"],
        },
  };
}

/** Retrieve data type resource. */
export async function dataTypesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesGetOptionalParams = { requestOptions: {} },
): Promise<DataType> {
  const result = await _dataTypesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    options,
  );
  return _dataTypesGetDeserialize(result);
}

export function _dataTypesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: DataTypesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataTypesUpdate200Response
  | DataTypesUpdate202Response
  | DataTypesUpdateDefaultResponse
  | DataTypesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              state: properties.properties?.["state"],
              storageOutputRetention:
                properties.properties?.["storageOutputRetention"],
              databaseCacheRetention:
                properties.properties?.["databaseCacheRetention"],
              databaseRetention: properties.properties?.["databaseRetention"],
            },
      },
    });
}

export async function _dataTypesUpdateDeserialize(
  result:
    | DataTypesUpdate200Response
    | DataTypesUpdate202Response
    | DataTypesUpdateDefaultResponse
    | DataTypesUpdateLogicalResponse,
): Promise<DataType> {
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
          state: result.body.properties?.["state"],
          stateReason: result.body.properties?.["stateReason"],
          storageOutputRetention:
            result.body.properties?.["storageOutputRetention"],
          databaseCacheRetention:
            result.body.properties?.["databaseCacheRetention"],
          databaseRetention: result.body.properties?.["databaseRetention"],
          visualizationUrl: result.body.properties?.["visualizationUrl"],
        },
  };
}

/** Update data type resource. */
export async function dataTypesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: DataTypesUpdateOptionalParams = { requestOptions: {} },
): Promise<DataType> {
  const result = await _dataTypesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    properties,
    options,
  );
  return _dataTypesUpdateDeserialize(result);
}

export function _dataTypesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataTypesDelete202Response
  | DataTypesDelete204Response
  | DataTypesDeleteDefaultResponse
  | DataTypesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataTypesDeleteDeserialize(
  result:
    | DataTypesDelete202Response
    | DataTypesDelete204Response
    | DataTypesDeleteDefaultResponse
    | DataTypesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data type resource. */
export async function dataTypesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dataTypesDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    options,
  );
  return _dataTypesDeleteDeserialize(result);
}

export function _dataTypesDeleteDataSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DataTypesDeleteDataOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataTypesDeleteData202Response
  | DataTypesDeleteData204Response
  | DataTypesDeleteDataDefaultResponse
  | DataTypesDeleteDataLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/deleteData",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _dataTypesDeleteDataDeserialize(
  result:
    | DataTypesDeleteData202Response
    | DataTypesDeleteData204Response
    | DataTypesDeleteDataDefaultResponse
    | DataTypesDeleteDataLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data for data type. */
export async function dataTypesDeleteData(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DataTypesDeleteDataOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dataTypesDeleteDataSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    body,
    options,
  );
  return _dataTypesDeleteDataDeserialize(result);
}

export function _dataTypesGenerateStorageContainerSasTokenSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: DataTypesGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DataTypesGenerateStorageContainerSasToken200Response
  | DataTypesGenerateStorageContainerSasTokenDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/generateStorageContainerSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        startTimeStamp: body["startTimeStamp"].toISOString(),
        expiryTimeStamp: body["expiryTimeStamp"].toISOString(),
        ipAddress: body["ipAddress"],
      },
    });
}

export async function _dataTypesGenerateStorageContainerSasTokenDeserialize(
  result:
    | DataTypesGenerateStorageContainerSasToken200Response
    | DataTypesGenerateStorageContainerSasTokenDefaultResponse,
): Promise<ContainerSasToken> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    storageContainerSasToken: result.body["storageContainerSasToken"],
  };
}

/** Generate sas token for storage container. */
export async function dataTypesGenerateStorageContainerSasToken(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: DataTypesGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<ContainerSasToken> {
  const result = await _dataTypesGenerateStorageContainerSasTokenSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    body,
    options,
  );
  return _dataTypesGenerateStorageContainerSasTokenDeserialize(result);
}

export function _dataTypesListByDataProductSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataTypesListByDataProductOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataTypesListByDataProduct200Response
  | DataTypesListByDataProductDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataTypesListByDataProductDeserialize(
  result:
    | DataTypesListByDataProduct200Response
    | DataTypesListByDataProductDefaultResponse,
): Promise<DataTypeListResult> {
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
            state: p.properties?.["state"],
            stateReason: p.properties?.["stateReason"],
            storageOutputRetention: p.properties?.["storageOutputRetention"],
            databaseCacheRetention: p.properties?.["databaseCacheRetention"],
            databaseRetention: p.properties?.["databaseRetention"],
            visualizationUrl: p.properties?.["visualizationUrl"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List data type by parent resource. */
export function dataTypesListByDataProduct(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataTypesListByDataProductOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DataType> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataTypesListByDataProductSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    _dataTypesListByDataProductDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
