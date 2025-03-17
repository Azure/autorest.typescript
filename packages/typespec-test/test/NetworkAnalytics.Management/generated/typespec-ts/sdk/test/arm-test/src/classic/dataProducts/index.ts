// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApiContext } from "../../api/networkAnalyticsApiContext.js";
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
  DataProductsListBySubscriptionOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsCreateOptionalParams,
} from "../../api/dataProducts/index.js";
import {
  DataProduct,
  DataProductUpdate,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
  ListRoleAssignments,
} from "../../models/models.js";
import {
  DataProductsListBySubscriptionOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsCreateOptionalParams,
} from "../../api/dataProducts/options.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DataProducts operations. */
export interface DataProductsOperations {
  /** List data products by subscription. */
  listBySubscription: (
    options: DataProductsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
  /** List data products by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options: DataProductsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
  /** List user roles associated with the data product. */
  listRolesAssignments: (
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, any>,
    options: DataProductsListRolesAssignmentsOptionalParams,
  ) => Promise<ListRoleAssignments>;
  /** Remove role from the data product. */
  removeUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options: DataProductsRemoveUserRoleOptionalParams,
  ) => Promise<void>;
  /** Assign role to the data product. */
  addUserRole: (
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options: DataProductsAddUserRoleOptionalParams,
  ) => Promise<RoleAssignmentDetail>;
  /** Initiate key rotation on Data Product. */
  rotateKey: (
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options: DataProductsRotateKeyOptionalParams,
  ) => Promise<void>;
  /** Generate sas token for storage account. */
  generateStorageAccountSasToken: (
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options: DataProductsGenerateStorageAccountSasTokenOptionalParams,
  ) => Promise<AccountSasToken>;
  /** Delete data product resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dataProductName: string,
    options: DataProductsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update data product resource. */
  update: (
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options: DataProductsUpdateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
  /** Retrieve data product resource. */
  get: (
    resourceGroupName: string,
    dataProductName: string,
    options: DataProductsGetOptionalParams,
  ) => Promise<DataProduct>;
  /** Create data product resource. */
  create: (
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options: DataProductsCreateOptionalParams,
  ) => PollerLike<OperationState<DataProduct>, DataProduct>;
}

function _getDataProducts(context: NetworkAnalyticsApiContext) {
  return {
    listBySubscription: (
      options: DataProductsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options: DataProductsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    listRolesAssignments: (
      resourceGroupName: string,
      dataProductName: string,
      body: Record<string, any>,
      options: DataProductsListRolesAssignmentsOptionalParams,
    ) =>
      listRolesAssignments(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    removeUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentDetail,
      options: DataProductsRemoveUserRoleOptionalParams,
    ) =>
      removeUserRole(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    addUserRole: (
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentCommonProperties,
      options: DataProductsAddUserRoleOptionalParams,
    ) =>
      addUserRole(context, resourceGroupName, dataProductName, body, options),
    rotateKey: (
      resourceGroupName: string,
      dataProductName: string,
      body: KeyVaultInfo,
      options: DataProductsRotateKeyOptionalParams,
    ) => rotateKey(context, resourceGroupName, dataProductName, body, options),
    generateStorageAccountSasToken: (
      resourceGroupName: string,
      dataProductName: string,
      body: AccountSas,
      options: DataProductsGenerateStorageAccountSasTokenOptionalParams,
    ) =>
      generateStorageAccountSasToken(
        context,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dataProductName: string,
      options: DataProductsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, dataProductName, options),
    update: (
      resourceGroupName: string,
      dataProductName: string,
      properties: DataProductUpdate,
      options: DataProductsUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, dataProductName, properties, options),
    get: (
      resourceGroupName: string,
      dataProductName: string,
      options: DataProductsGetOptionalParams,
    ) => get(context, resourceGroupName, dataProductName, options),
    create: (
      resourceGroupName: string,
      dataProductName: string,
      resource: DataProduct,
      options: DataProductsCreateOptionalParams,
    ) => create(context, resourceGroupName, dataProductName, resource, options),
  };
}

export function _getDataProductsOperations(
  context: NetworkAnalyticsApiContext,
): DataProductsOperations {
  return {
    ..._getDataProducts(context),
  };
}
