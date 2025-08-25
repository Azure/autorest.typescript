// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SystemAssignedIdentitiesGetByScopeOptionalParams,
  SystemAssignedIdentitiesGetByScopeResponse,
} from "../models/index.js";

/** Interface representing a SystemAssignedIdentities. */
export interface SystemAssignedIdentities {
  /**
   * Gets the systemAssignedIdentity available under the specified RP scope.
   * @param scope The resource provider scope of the resource. Parent resource being extended by Managed
   *              Identities.
   * @param options The options parameters.
   */
  getByScope(
    scope: string,
    options?: SystemAssignedIdentitiesGetByScopeOptionalParams,
  ): Promise<SystemAssignedIdentitiesGetByScopeResponse>;
}
