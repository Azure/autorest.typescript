// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import {
  create,
  get,
  update,
  $delete,
  deleteData,
  generateStorageContainerSasToken,
  listByDataProduct,
} from "../../api/dataTypes/index.js";
import {
  DataType,
  DataTypeUpdate,
  ContainerSaS,
  ContainerSasToken,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DataTypesCreateOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesUpdateOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesListByDataProductOptionalParams,
} from "../../api/options.js";

/** Interface representing a DataTypes operations. */
export interface DataTypesOperations {
  /** Create data type resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesGetOptionalParams,
  ) => Promise<DataType>;
  /** Update data type resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
  /** Delete data type resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Delete data for data type. */
  deleteData: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DataTypesDeleteDataOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Generate sas token for storage container. */
  generateStorageContainerSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
  ) => Promise<ContainerSasToken>;
  /** List data type by parent resource. */
  listByDataProduct: (
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams,
  ) => PagedAsyncIterableIterator<DataType>;
}

export function getDataTypes(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    create: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: DataTypesCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      ),
    update: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      properties: DataTypeUpdate,
      options?: DataTypesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      ),
    deleteData: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: Record<string, any>,
      options?: DataTypesDeleteDataOptionalParams,
    ) =>
      deleteData(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
    generateStorageContainerSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: ContainerSaS,
      options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
    ) =>
      generateStorageContainerSasToken(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      ),
    listByDataProduct: (
      resourceGroupName: string,
      dataProductName: string,
      options?: DataTypesListByDataProductOptionalParams,
    ) =>
      listByDataProduct(
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
  subscriptionId: string,
): DataTypesOperations {
  return {
    ...getDataTypes(context, subscriptionId),
  };
}
