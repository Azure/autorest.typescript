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

export interface LocationsOperations {
  checkTrialAvailability: (
    subscriptionId: string,
    location: string,
    sku?: Sku,
    options?: LocationsCheckTrialAvailabilityOptionalParams,
  ) => Promise<Trial>;
  checkQuotaAvailability: (
    subscriptionId: string,
    location: string,
    options?: LocationsCheckQuotaAvailabilityOptionalParams,
  ) => Promise<Quota>;
}

export function getLocations(context: AVSContext) {
  return {
    checkTrialAvailability: (
      subscriptionId: string,
      location: string,
      sku?: Sku,
      options?: LocationsCheckTrialAvailabilityOptionalParams,
    ) =>
      checkTrialAvailability(context, subscriptionId, location, sku, options),
    checkQuotaAvailability: (
      subscriptionId: string,
      location: string,
      options?: LocationsCheckQuotaAvailabilityOptionalParams,
    ) => checkQuotaAvailability(context, subscriptionId, location, options),
  };
}

export function getLocationsOperations(
  context: AVSContext,
): LocationsOperations {
  return {
    ...getLocations(context),
  };
}
