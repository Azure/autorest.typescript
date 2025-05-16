// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext } from "../../api/helpContext.js";
import { CheckNameAvailabilityResponse } from "../../models/models.js";
import { CheckNameAvailabilityOperationGroupCheckAvailabilityOptionalParams } from "../../api/checkNameAvailabilityOperationGroup/options.js";
import { checkAvailability } from "../../api/checkNameAvailabilityOperationGroup/operations.js";

/** Interface representing a CheckNameAvailabilityOperationGroup operations. */
export interface CheckNameAvailabilityOperationGroupOperations {
  /** This API is used to check the uniqueness of a resource name used for a diagnostic, troubleshooter or solutions */
  checkAvailability: (
    scope: string,
    options?: CheckNameAvailabilityOperationGroupCheckAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
}

function _getCheckNameAvailabilityOperationGroup(context: HelpContext) {
  return {
    checkAvailability: (
      scope: string,
      options?: CheckNameAvailabilityOperationGroupCheckAvailabilityOptionalParams,
    ) => checkAvailability(context, scope, options),
  };
}

export function _getCheckNameAvailabilityOperationGroupOperations(
  context: HelpContext,
): CheckNameAvailabilityOperationGroupOperations {
  return {
    ..._getCheckNameAvailabilityOperationGroup(context),
  };
}
