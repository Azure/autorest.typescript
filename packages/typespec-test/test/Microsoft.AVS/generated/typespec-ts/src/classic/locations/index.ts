// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { Sku, Trial, Quota } from "../../models/models.js";
import {
  checkTrialAvailability,
  checkQuotaAvailability,
} from "../../api/locations/index.js";
import {
  LocationsCheckTrialAvailabilityOptionalParams,
  LocationsCheckQuotaAvailabilityOptionalParams,
} from "../../models/options.js";

/** Interface representing a Locations operations. */
export interface LocationsOperations {
  /** Return trial status for subscription by region */
  checkTrialAvailability: (
    location: string,
    sku?: Sku,
    options?: LocationsCheckTrialAvailabilityOptionalParams,
  ) => Promise<Trial>;
  /** Return quota for subscription by region */
  checkQuotaAvailability: (
    location: string,
    options?: LocationsCheckQuotaAvailabilityOptionalParams,
  ) => Promise<Quota>;
}

export function getLocations(context: AVSContext, subscriptionId: string) {
  return {
    checkTrialAvailability: (
      location: string,
      sku?: Sku,
      options?: LocationsCheckTrialAvailabilityOptionalParams,
    ) =>
      checkTrialAvailability(context, subscriptionId, location, sku, options),
    checkQuotaAvailability: (
      location: string,
      options?: LocationsCheckQuotaAvailabilityOptionalParams,
    ) => checkQuotaAvailability(context, subscriptionId, location, options),
  };
}

export function getLocationsOperations(
  context: AVSContext,
  subscriptionId: string,
): LocationsOperations {
  return {
    ...getLocations(context, subscriptionId),
  };
}
