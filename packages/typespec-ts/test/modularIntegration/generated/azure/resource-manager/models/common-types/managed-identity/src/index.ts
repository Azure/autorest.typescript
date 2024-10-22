// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ManagedIdentityClient } from "./managedIdentityClient.js";
export {
  ManagedIdentityTrackedResource,
  ManagedIdentityTrackedResourceProperties,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
} from "./models/index.js";
export {
  ManagedIdentityClientOptionalParams,
  GetOptionalParams,
  CreateWithSystemAssignedOptionalParams,
  UpdateWithUserAssignedAndSystemAssignedOptionalParams,
} from "./api/index.js";
