// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApiContext } from "../../api/networkAnalyticsApiContext.js";
import {
  listByDataProduct,
  generateStorageContainerSasToken,
  deleteData,
  $delete,
  update,
  get,
  create,
} from "../../api/dataTypes/operations.js";
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
  DataType,
  DataTypeUpdate,
  ContainerSaS,
  ContainerSasToken,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SimplePollerLike,
  getSimplePoller,
} from "../../static-helpers/simplePollerHelpers.js";
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
  /** @deprecated use deleteData instead */
  beginDeleteData: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DataTypesDeleteDataOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use deleteData instead */
  beginDeleteDataAndWait: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options?: DataTypesDeleteDataOptionalParams,
  ) => Promise<void>;
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
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams,
  ) => Promise<void>;
  /** Update data type resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => PollerLike<OperationState<DataType>, DataType>;
  /** @deprecated use update instead */
  beginUpdate: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<DataType>, DataType>>;
  /** @deprecated use update instead */
  beginUpdateAndWait: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams,
  ) => Promise<DataType>;
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
  /** @deprecated use create instead */
  beginCreate: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<DataType>, DataType>>;
  /** @deprecated use create instead */
  beginCreateAndWait: (
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams,
  ) => Promise<DataType>;
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
    beginDeleteData: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: Record<string, any>,
      options?: DataTypesDeleteDataOptionalParams,
    ) => {
      const poller = deleteData(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteDataAndWait: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      body: Record<string, any>,
      options?: DataTypesDeleteDataOptionalParams,
    ) => {
      return await deleteData(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        body,
        options,
      );
    },
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
    beginDelete: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      options?: DataTypesDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        options,
      );
    },
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
    beginUpdate: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      properties: DataTypeUpdate,
      options?: DataTypesUpdateOptionalParams,
    ) => {
      const poller = update(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginUpdateAndWait: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      properties: DataTypeUpdate,
      options?: DataTypesUpdateOptionalParams,
    ) => {
      return await update(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      );
    },
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
    beginCreate: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: DataTypesCreateOptionalParams,
    ) => {
      const poller = create(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateAndWait: async (
      resourceGroupName: string,
      dataProductName: string,
      dataTypeName: string,
      resource: DataType,
      options?: DataTypesCreateOptionalParams,
    ) => {
      return await create(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      );
    },
  };
}

export function _getDataTypesOperations(
  context: NetworkAnalyticsApiContext,
): DataTypesOperations {
  return {
    ..._getDataTypes(context),
  };
}
