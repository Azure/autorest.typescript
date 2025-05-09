// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataReplicationContext } from "../../api/dataReplicationContext.js";
import { CheckNameAvailabilityResponseModel } from "../../models/models.js";
import { CheckNameAvailabilityPostOptionalParams } from "../../api/checkNameAvailability/options.js";
import { post } from "../../api/checkNameAvailability/operations.js";

/** Interface representing a CheckNameAvailability operations. */
export interface CheckNameAvailabilityOperations {
  /** Checks the resource name availability. */
  post: (
    location: string,
    options?: CheckNameAvailabilityPostOptionalParams,
  ) => Promise<CheckNameAvailabilityResponseModel>;
}

function _getCheckNameAvailability(context: DataReplicationContext) {
  return {
    post: (
      location: string,
      options?: CheckNameAvailabilityPostOptionalParams,
    ) => post(context, location, options),
  };
}

export function _getCheckNameAvailabilityOperations(
  context: DataReplicationContext,
): CheckNameAvailabilityOperations {
  return {
    ..._getCheckNameAvailability(context),
  };
}
