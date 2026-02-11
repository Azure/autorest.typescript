// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createDataTypes, DataTypesContext, DataTypesOptionalParams } from "./api/index.js";
import { DataType, DataTypeUpdate, ContainerSaS, ContainerSasToken } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../static-helpers/simplePollerHelpers.js";
import {
  listByDataProduct,
  generateStorageContainerSasToken,
  deleteData,
  $delete,
  update,
  get,
  create,
} from "./api/operations.js";
import {
  ListByDataProductOptionalParams,
  GenerateStorageContainerSasTokenOptionalParams,
  DeleteDataOptionalParams,
  DeleteOptionalParams,
  UpdateOptionalParams,
  GetOptionalParams,
  CreateOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DataTypesOptionalParams } from "./api/dataTypesContext.js";

export class DataTypes {
  private _client: DataTypesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Operations on data type resource. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DataTypesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDataTypes(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List data type by parent resource. */
  listByDataProduct(
    resourceGroupName: string,
    dataProductName: string,
    options: ListByDataProductOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DataType> {
    return listByDataProduct(this._client, resourceGroupName, dataProductName, options);
  }

  /** Generate sas token for storage container. */
  generateStorageContainerSasToken(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options: GenerateStorageContainerSasTokenOptionalParams = { requestOptions: {} },
  ): Promise<ContainerSasToken> {
    return generateStorageContainerSasToken(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      body,
      options,
    );
  }

  /** Delete data for data type. */
  deleteData(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options: DeleteDataOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return deleteData(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      body,
      options,
    );
  }

  /** @deprecated use deleteData instead */
  async beginDeleteData(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options: DeleteDataOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const poller = deleteData(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      body,
      options,
    );
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use deleteData instead */
  async beginDeleteDataAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, any>,
    options: DeleteDataOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return await deleteData(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      body,
      options,
    );
  }

  /** Delete data type resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return $delete(this._client, resourceGroupName, dataProductName, dataTypeName, options);
  }

  /** @deprecated use delete instead */
  async beginDelete(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const poller = $delete(this._client, resourceGroupName, dataProductName, dataTypeName, options);
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use delete instead */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return await $delete(this._client, resourceGroupName, dataProductName, dataTypeName, options);
  }

  /** Update data type resource. */
  update(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<DataType>, DataType> {
    return update(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      properties,
      options,
    );
  }

  /** @deprecated use update instead */
  async beginUpdate(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<DataType>, DataType>> {
    const poller = update(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      properties,
      options,
    );
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use update instead */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<DataType> {
    return await update(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      properties,
      options,
    );
  }

  /** Retrieve data type resource. */
  get(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<DataType> {
    return get(this._client, resourceGroupName, dataProductName, dataTypeName, options);
  }

  /** Create data type resource. */
  create(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options: CreateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<DataType>, DataType> {
    return create(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      resource,
      options,
    );
  }

  /** @deprecated use create instead */
  async beginCreate(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<DataType>, DataType>> {
    const poller = create(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      resource,
      options,
    );
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use create instead */
  async beginCreateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<DataType> {
    return await create(
      this._client,
      resourceGroupName,
      dataProductName,
      dataTypeName,
      resource,
      options,
    );
  }
}
