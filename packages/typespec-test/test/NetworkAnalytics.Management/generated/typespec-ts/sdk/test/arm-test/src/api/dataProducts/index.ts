// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  read,
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
} from "./operations.js";
export {
  DataProductsReadOptionalParams,
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
} from "./options.js";
