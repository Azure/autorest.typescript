// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  Float64SecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "../../models/models.js";
import { DurationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PropertyDefaultOptionalParams,
  PropertyIso8601OptionalParams,
  PropertyInt32SecondsOptionalParams,
  PropertyFloatSecondsOptionalParams,
  PropertyFloat64SecondsOptionalParams,
  PropertyFloatSecondsArrayOptionalParams,
} from "../../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  body: DefaultDurationProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<DefaultDurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyDefault(
  context: Client,
  body: DefaultDurationProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): Promise<DefaultDurationProperty> {
  const result = await _propertyDefaultSend(context, body, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyIso8601Send(
  context: Client,
  body: ISO8601DurationProperty,
  options: PropertyIso8601OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/iso8601")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyIso8601Deserialize(
  result: PathUncheckedResponse,
): Promise<ISO8601DurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyIso8601(
  context: Client,
  body: ISO8601DurationProperty,
  options: PropertyIso8601OptionalParams = { requestOptions: {} },
): Promise<ISO8601DurationProperty> {
  const result = await _propertyIso8601Send(context, body, options);
  return _propertyIso8601Deserialize(result);
}

export function _propertyInt32SecondsSend(
  context: Client,
  body: Int32SecondsDurationProperty,
  options: PropertyInt32SecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/int32-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyInt32SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<Int32SecondsDurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyInt32Seconds(
  context: Client,
  body: Int32SecondsDurationProperty,
  options: PropertyInt32SecondsOptionalParams = { requestOptions: {} },
): Promise<Int32SecondsDurationProperty> {
  const result = await _propertyInt32SecondsSend(context, body, options);
  return _propertyInt32SecondsDeserialize(result);
}

export function _propertyFloatSecondsSend(
  context: Client,
  body: FloatSecondsDurationProperty,
  options: PropertyFloatSecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/float-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyFloatSecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<FloatSecondsDurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyFloatSeconds(
  context: Client,
  body: FloatSecondsDurationProperty,
  options: PropertyFloatSecondsOptionalParams = { requestOptions: {} },
): Promise<FloatSecondsDurationProperty> {
  const result = await _propertyFloatSecondsSend(context, body, options);
  return _propertyFloatSecondsDeserialize(result);
}

export function _propertyFloat64SecondsSend(
  context: Client,
  body: Float64SecondsDurationProperty,
  options: PropertyFloat64SecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/float64-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyFloat64SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<Float64SecondsDurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyFloat64Seconds(
  context: Client,
  body: Float64SecondsDurationProperty,
  options: PropertyFloat64SecondsOptionalParams = { requestOptions: {} },
): Promise<Float64SecondsDurationProperty> {
  const result = await _propertyFloat64SecondsSend(context, body, options);
  return _propertyFloat64SecondsDeserialize(result);
}

export function _propertyFloatSecondsArraySend(
  context: Client,
  body: FloatSecondsDurationArrayProperty,
  options: PropertyFloatSecondsArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/property/float-seconds-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyFloatSecondsArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<FloatSecondsDurationArrayProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyFloatSecondsArray(
  context: Client,
  body: FloatSecondsDurationArrayProperty,
  options: PropertyFloatSecondsArrayOptionalParams = { requestOptions: {} },
): Promise<FloatSecondsDurationArrayProperty> {
  const result = await _propertyFloatSecondsArraySend(context, body, options);
  return _propertyFloatSecondsArrayDeserialize(result);
}
