// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDataProducts,
  DataProductsContext,
  DataProductsOptionalParams,
} from "./api/index.js";
import {
  DataProduct,
  DataProductUpdate,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
  ListRoleAssignments,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../static-helpers/simplePollerHelpers.js";
import {
  listBySubscription,
  listByResourceGroup,
  listRolesAssignments,
  removeUserRole,
  addUserRole,
  rotateKey,
  generateStorageAccountSasToken,
  $delete,
  update,
  get,
  create,
} from "./api/operations.js";
import {
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  ListRolesAssignmentsOptionalParams,
  RemoveUserRoleOptionalParams,
  AddUserRoleOptionalParams,
  RotateKeyOptionalParams,
  GenerateStorageAccountSasTokenOptionalParams,
  DeleteOptionalParams,
  UpdateOptionalParams,
  GetOptionalParams,
  CreateOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DataProductsOptionalParams } from "./api/dataProductsContext.js";

export class DataProducts {
  private _client: DataProductsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Operations on data product resource. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DataProductsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDataProducts(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List data products by subscription. */
  listBySubscription(
    options: ListBySubscriptionOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DataProduct> {
    return listBySubscription(this._client, options);
  }

  /** List data products by resource group. */
  listByResourceGroup(
    resourceGroupName: string,
    options: ListByResourceGroupOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DataProduct> {
    return listByResourceGroup(this._client, resourceGroupName, options);
  }

  /** List user roles associated with the data product. */
  listRolesAssignments(
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, any>,
    options: ListRolesAssignmentsOptionalParams = { requestOptions: {} },
  ): Promise<ListRoleAssignments> {
    return listRolesAssignments(this._client, resourceGroupName, dataProductName, body, options);
  }

  /** Remove role from the data product. */
  removeUserRole(
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options: RemoveUserRoleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return removeUserRole(this._client, resourceGroupName, dataProductName, body, options);
  }

  /** Assign role to the data product. */
  addUserRole(
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options: AddUserRoleOptionalParams = { requestOptions: {} },
  ): Promise<RoleAssignmentDetail> {
    return addUserRole(this._client, resourceGroupName, dataProductName, body, options);
  }

  /** Initiate key rotation on Data Product. */
  rotateKey(
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options: RotateKeyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return rotateKey(this._client, resourceGroupName, dataProductName, body, options);
  }

  /** Generate sas token for storage account. */
  generateStorageAccountSasToken(
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options: GenerateStorageAccountSasTokenOptionalParams = { requestOptions: {} },
  ): Promise<AccountSasToken> {
    return generateStorageAccountSasToken(
      this._client,
      resourceGroupName,
      dataProductName,
      body,
      options,
    );
  }

  /** Delete data product resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    resourceGroupName: string,
    dataProductName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return $delete(this._client, resourceGroupName, dataProductName, options);
  }

  /** @deprecated use delete instead */
  async beginDelete(
    resourceGroupName: string,
    dataProductName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const poller = $delete(this._client, resourceGroupName, dataProductName, options);
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use delete instead */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dataProductName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return await $delete(this._client, resourceGroupName, dataProductName, options);
  }

  /** Update data product resource. */
  update(
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<DataProduct>, DataProduct> {
    return update(this._client, resourceGroupName, dataProductName, properties, options);
  }

  /** @deprecated use update instead */
  async beginUpdate(
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<DataProduct>, DataProduct>> {
    const poller = update(this._client, resourceGroupName, dataProductName, properties, options);
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use update instead */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<DataProduct> {
    return await update(this._client, resourceGroupName, dataProductName, properties, options);
  }

  /** Retrieve data product resource. */
  get(
    resourceGroupName: string,
    dataProductName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<DataProduct> {
    return get(this._client, resourceGroupName, dataProductName, options);
  }

  /** Create data product resource. */
  create(
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options: CreateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<DataProduct>, DataProduct> {
    return create(this._client, resourceGroupName, dataProductName, resource, options);
  }

  /** @deprecated use create instead */
  async beginCreate(
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<SimplePollerLike<OperationState<DataProduct>, DataProduct>> {
    const poller = create(this._client, resourceGroupName, dataProductName, resource, options);
    await poller.submitted();
    return getSimplePoller(poller);
  }

  /** @deprecated use create instead */
  async beginCreateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<DataProduct> {
    return await create(this._client, resourceGroupName, dataProductName, resource, options);
  }
}
