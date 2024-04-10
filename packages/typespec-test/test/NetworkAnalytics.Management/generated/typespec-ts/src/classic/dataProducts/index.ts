// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsContext } from "../../api/NetworkAnalyticsContext.js";
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
  dataProductsCreate,
  dataProductsGet,
  dataProductsUpdate,
  dataProductsDelete,
  dataProductsGenerateStorageAccountSasToken,
  dataProductsRotateKey,
  dataProductsAddUserRole,
  dataProductsRemoveUserRole,
  dataProductsListRolesAssignments,
  dataProductsListByResourceGroup,
  dataProductsListBySubscription,
} from "../../api/dataProducts/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DataProductsCreateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface DataProductsOperations {
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options?: DataProductsCreateOptionalParams,
  ) => Promise<DataProduct>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsGetOptionalParams,
  ) => Promise<DataProduct>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options?: DataProductsUpdateOptionalParams,
  ) => Promise<DataProduct>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsDeleteOptionalParams,
  ) => Promise<void>;
  generateStorageAccountSasToken: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options?: DataProductsGenerateStorageAccountSasTokenOptionalParams,
  ) => Promise<AccountSasToken>;
  rotateKey: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options?: DataProductsRotateKeyOptionalParams,
  ) => Promise<void>;
  addUserRole: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options?: DataProductsAddUserRoleOptionalParams,
  ) => Promise<RoleAssignmentDetail>;
  removeUserRole: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options?: DataProductsRemoveUserRoleOptionalParams,
  ) => Promise<void>;
  listRolesAssignments: (
    subscriptionId: string,
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, any>,
    options?: DataProductsListRolesAssignmentsOptionalParams,
  ) => Promise<ListRoleAssignments>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: DataProductsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
  listBySubscription: (
    subscriptionId: string,
    options?: DataProductsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProduct>;
}

export function getDataProducts(context: NetworkAnalyticsContext) {
  return {
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      resource: DataProduct,
      options?: DataProductsCreateOptionalParams,
    ) =>
      dataProductsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      options?: DataProductsGetOptionalParams,
    ) =>
      dataProductsGet(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      properties: DataProductUpdate,
      options?: DataProductsUpdateOptionalParams,
    ) =>
      dataProductsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      options?: DataProductsDeleteOptionalParams,
    ) =>
      dataProductsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    generateStorageAccountSasToken: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      body: AccountSas,
      options?: DataProductsGenerateStorageAccountSasTokenOptionalParams,
    ) =>
      dataProductsGenerateStorageAccountSasToken(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    rotateKey: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      body: KeyVaultInfo,
      options?: DataProductsRotateKeyOptionalParams,
    ) =>
      dataProductsRotateKey(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    addUserRole: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentCommonProperties,
      options?: DataProductsAddUserRoleOptionalParams,
    ) =>
      dataProductsAddUserRole(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    removeUserRole: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      body: RoleAssignmentDetail,
      options?: DataProductsRemoveUserRoleOptionalParams,
    ) =>
      dataProductsRemoveUserRole(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    listRolesAssignments: (
      subscriptionId: string,
      resourceGroupName: string,
      dataProductName: string,
      body: Record<string, any>,
      options?: DataProductsListRolesAssignmentsOptionalParams,
    ) =>
      dataProductsListRolesAssignments(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        body,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: DataProductsListByResourceGroupOptionalParams,
    ) =>
      dataProductsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      subscriptionId: string,
      options?: DataProductsListBySubscriptionOptionalParams,
    ) => dataProductsListBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsOperations(
  context: NetworkAnalyticsContext,
): DataProductsOperations {
  return {
    ...getDataProducts(context),
  };
}
