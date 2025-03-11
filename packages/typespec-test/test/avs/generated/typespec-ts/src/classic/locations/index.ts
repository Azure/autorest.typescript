// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  locationsCheckQuotaAvailability,
  locationsCheckTrialAvailability,
} from "../../api/locations/index.js";
import {
  LocationsCheckQuotaAvailabilityOptionalParams,
  LocationsCheckTrialAvailabilityOptionalParams,
} from "../../api/options.js";
import { Trial, Quota } from "../../models/models.js";

/** Interface representing a Locations operations. */
export interface LocationsOperations {
  /** Return quota for subscription by region */
  checkQuotaAvailability: (
    location: string,
    options?: LocationsCheckQuotaAvailabilityOptionalParams,
  ) => Promise<Quota>;
  /** Return trial status for subscription by region */
  checkTrialAvailability: (
    location: string,
    options?: LocationsCheckTrialAvailabilityOptionalParams,
  ) => Promise<Trial>;
}

function _getLocations(context: AzureVMwareSolutionAPIContext) {
  return {
    checkQuotaAvailability: (
      location: string,
      options?: LocationsCheckQuotaAvailabilityOptionalParams,
    ) => locationsCheckQuotaAvailability(context, location, options),
    checkTrialAvailability: (
      location: string,
      options?: LocationsCheckTrialAvailabilityOptionalParams,
    ) => locationsCheckTrialAvailability(context, location, options),
  };
}

export function _getLocationsOperations(
  context: AzureVMwareSolutionAPIContext,
): LocationsOperations {
  return {
    ..._getLocations(context),
  };
}
