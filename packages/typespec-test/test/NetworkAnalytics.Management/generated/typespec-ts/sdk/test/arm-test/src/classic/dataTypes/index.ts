// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApiContext } from "../../api/networkAnalyticsApiContext.js";
import {
  DataType,
  ContainerSaS,
  ContainerSasToken,
} from "../../models/networkAnalytics/models.js";
import { DataTypeUpdate } from "../../models/models.js";
import {
  DataTypesListByDataProductOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesUpdateOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesCreateOptionalParams,
} from "../../api/dataTypes/options.js";
import {
  listByDataProduct,
  generateStorageContainerSasToken,
  deleteData,
  $delete,
  update,
  get,
  create,
} from "../../api/dataTypes/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DataTypes operations. */
export interface DataTypesOperations {
  /** List data type by parent resource. */
  listByDataProduct: (
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams,
  ) => PagedAsyncIterableIterator<DataType>;
  /** Generate sas token for storage container. */
  generateStorageContainerSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
  ) => Promise<ContainerSasToken>;
  /** Delete data for data type. */
  deleteData: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DataTypesDeleteDataOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Update data type resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesGetOptionalParams,
  ) => Promise<DataType>;
  /** Create data type resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
}

function _getDataTypes(context: NetworkAnalyticsApiContext) {
  return {
    listByDataProduct: (
      resourceGroupName: string,
      dataProductName: string,
      options?: DataTypesListByDataProductOptionalParams,
    ) =>
      listByDataProduct(context, resourceGroupName, dataProductName, options),
    generateStorageContainerSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: ContainerSaS,
      options?: DataTypesGenerateStorageContainerSasTokenOptionalParams,
    ) =>
      generateStorageContainerSasToken(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
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
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
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
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
    get: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesGetOptionalParams,
    ) =>
      get(context, resourceGroupName, dataProductName, dataTypeName, options),
    create: (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: DataTypesCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
  };
}

export function _getDataTypesOperations(
  context: NetworkAnalyticsApiContext,
): DataTypesOperations {
  return {
    ..._getDataTypes(context),
  };
}
