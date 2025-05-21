// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { ContosoProviderHubClient } from "./contosoProviderHubClient.js";
export {
  Operation,
  OperationDisplay,
  Origin,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  Employee,
  EmployeeProperties,
  ProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  CreatedByType,
  ARMErrorResponse,
  KnownVersions,
} from "./models/index.js";
export { ContosoProviderHubClientOptionalParams } from "./api/index.js";
export { EmployeesGetOptionalParams } from "./api/employees/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { EmployeesOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
