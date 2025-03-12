// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  skuSerializer,
  Trial,
  trialDeserializer,
  Quota,
  quotaDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  LocationsCheckQuotaAvailabilityOptionalParams,
  LocationsCheckTrialAvailabilityOptionalParams,
} from "./options.js";

export function _locationsCheckQuotaAvailabilitySend(
  context: Client,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _locationsCheckQuotaAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<Quota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return quotaDeserializer(result.body);
}

/** Return quota for subscription by region */
export async function locationsCheckQuotaAvailability(
  context: Client,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Quota> {
  const result = await _locationsCheckQuotaAvailabilitySend(
    context,
    location,
    options,
  );
  return _locationsCheckQuotaAvailabilityDeserialize(result);
}

export function _locationsCheckTrialAvailabilitySend(
  context: Client,
  location: string,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["sku"] ? options["sku"] : skuSerializer(options["sku"]),
    });
}

export async function _locationsCheckTrialAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<Trial> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return trialDeserializer(result.body);
}

/** Return trial status for subscription by region */
export async function locationsCheckTrialAvailability(
  context: Client,
  location: string,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Trial> {
  const result = await _locationsCheckTrialAvailabilitySend(
    context,
    location,
    options,
  );
  return _locationsCheckTrialAvailabilityDeserialize(result);
}
