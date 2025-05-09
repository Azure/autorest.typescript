// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataReplicationContext } from "../../api/dataReplicationContext.js";
import { OperationStatus } from "../../models/models.js";
import { LocationBasedOperationResultsGetOptionalParams } from "../../api/locationBasedOperationResults/options.js";
import { get } from "../../api/locationBasedOperationResults/operations.js";

/** Interface representing a LocationBasedOperationResults operations. */
export interface LocationBasedOperationResultsOperations {
  /** Gets the location based operation result. */
  get: (
    resourceGroupName: string,
    location: string,
    operationId: string,
    options?: LocationBasedOperationResultsGetOptionalParams,
  ) => Promise<OperationStatus>;
}

function _getLocationBasedOperationResults(context: DataReplicationContext) {
  return {
    get: (
      resourceGroupName: string,
      location: string,
      operationId: string,
      options?: LocationBasedOperationResultsGetOptionalParams,
    ) => get(context, resourceGroupName, location, operationId, options),
  };
}

export function _getLocationBasedOperationResultsOperations(
  context: DataReplicationContext,
): LocationBasedOperationResultsOperations {
  return {
    ..._getLocationBasedOperationResults(context),
  };
}
