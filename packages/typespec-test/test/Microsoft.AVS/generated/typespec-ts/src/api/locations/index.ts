// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Sku,
  Trial,
  TrialStatus,
  Quota,
  QuotaEnabled,
} from "../../models/models.js";
import {
  isUnexpected,
  AVSContext as Client,
  LocationsCheckQuotaAvailability200Response,
  LocationsCheckQuotaAvailabilityDefaultResponse,
  LocationsCheckTrialAvailability200Response,
  LocationsCheckTrialAvailabilityDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  LocationsCheckTrialAvailabilityOptionalParams,
  LocationsCheckQuotaAvailabilityOptionalParams,
} from "../../models/options.js";

export function _checkTrialAvailabilitySend(
  context: Client,
  subscriptionId: string,
  location: string,
  sku?: Sku,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | LocationsCheckTrialAvailability200Response
  | LocationsCheckTrialAvailabilityDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability",
      subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body:
        sku === undefined
          ? sku
          : {
              name: sku["name"],
              tier: sku["tier"],
              size: sku["size"],
              family: sku["family"],
              capacity: sku["capacity"],
            },
    });
}

export async function _checkTrialAvailabilityDeserialize(
  result:
    | LocationsCheckTrialAvailability200Response
    | LocationsCheckTrialAvailabilityDefaultResponse,
): Promise<Trial> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    status: result.body["status"] as TrialStatus,
    availableHosts: result.body["availableHosts"],
  };
}

/** Return trial status for subscription by region */
export async function checkTrialAvailability(
  context: Client,
  subscriptionId: string,
  location: string,
  sku?: Sku,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Trial> {
  const result = await _checkTrialAvailabilitySend(
    context,
    subscriptionId,
    location,
    sku,
    options,
  );
  return _checkTrialAvailabilityDeserialize(result);
}

export function _checkQuotaAvailabilitySend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | LocationsCheckQuotaAvailability200Response
  | LocationsCheckQuotaAvailabilityDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability",
      subscriptionId,
      location,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _checkQuotaAvailabilityDeserialize(
  result:
    | LocationsCheckQuotaAvailability200Response
    | LocationsCheckQuotaAvailabilityDefaultResponse,
): Promise<Quota> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    hostsRemaining: result.body["hostsRemaining"],
    quotaEnabled: result.body["quotaEnabled"] as QuotaEnabled,
  };
}

/** Return quota for subscription by region */
export async function checkQuotaAvailability(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Quota> {
  const result = await _checkQuotaAvailabilitySend(
    context,
    subscriptionId,
    location,
    options,
  );
  return _checkQuotaAvailabilityDeserialize(result);
}
