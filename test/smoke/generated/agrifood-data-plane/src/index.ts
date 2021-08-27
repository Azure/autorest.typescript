// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import AzureAgriFoodPlatformDataPlaneService from "./azureAgriFoodPlatformDataPlaneService";

export * from "./azureAgriFoodPlatformDataPlaneService";
export * from "./models";
export * from "./parameters";
export * from "./responses";

export default AzureAgriFoodPlatformDataPlaneService;

export { paginate, PaginateReturn, GetArrayType } from "./paginateHelper";
