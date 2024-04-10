// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsContext } from "../../api/NetworkAnalyticsContext.js";
import {
  DataType,
  DataTypeUpdate,
  ContainerSaS,
  ContainerSasToken,
} from "../../models/models.js";
import {
  dataTypesCreate,
  dataTypesGet,
  dataTypesUpdate,
  dataTypesDelete,
  dataTypesDeleteData,
  dataTypesGenerateStorageContainerSasToken,
  dataTypesListByDataProduct,
} from "../../api/dataTypes/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DataTypesCreateOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesUpdateOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesListByDataProductOptionalParams,
} from "../../models/options.js";

export interface DataTypesOperations {
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams,
  ) => Promise<DataType>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesGetOptionalParams,
  ) => Promise<DataType>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => Promise<DataType>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams,
  ) => Promise<void>;
  deleteData: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DataTypesDeleteDataOptionalParams,
  ) => Promise<void>;
  generateStorageContainerSasToken: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
  ) => Promise<ContainerSasToken>;
  listByDataProduct: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams,
  ) => PagedAsyncIterableIterator<DataType>;
}

export function getDataTypes(context: NetworkAnalyticsContext) {
  return {
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: DataTypesCreateOptionalParams,
    ) =>
      dataTypesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesGetOptionalParams,
    ) =>
      dataTypesGet(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      properties: DataTypeUpdate,
      options?: DataTypesUpdateOptionalParams,
    ) =>
      dataTypesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesDeleteOptionalParams,
    ) =>
      dataTypesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      ),
    deleteData: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: Record<string, any>,
      options?: DataTypesDeleteDataOptionalParams,
    ) =>
      dataTypesDeleteData(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
    generateStorageContainerSasToken: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: ContainerSaS,
      options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
    ) =>
      dataTypesGenerateStorageContainerSasToken(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
    listByDataProduct: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      options?: DataTypesListByDataProductOptionalParams,
    ) =>
      dataTypesListByDataProduct(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
  };
}

export function getDataTypesOperations(
  context: NetworkAnalyticsContext,
): DataTypesOperations {
  return {
    ...getDataTypes(context),
  };
}
