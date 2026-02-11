// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createDataProducts,
  DataProductsContext,
  DataProductsOptionalParams,
} from "./dataProductsContext.js";
export {
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
} from "./options.js";
