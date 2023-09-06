// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "../models/models.js";
import {
  DurationContext as Client,
  PropertyDefault200Response,
  PropertyFloatSeconds200Response,
  PropertyFloatSecondsArray200Response,
  PropertyInt32Seconds200Response,
  PropertyIso8601200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  PropertyDefaultOptions,
  PropertyIso8601Options,
  PropertyInt32SecondsOptions,
  PropertyFloatSecondsOptions,
  PropertyFloatSecondsArrayOptions,
} from "../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  value: string,
  options: PropertyDefaultOptions = { requestOptions: {} }
): StreamableMethod<PropertyDefault200Response> {
  return context
    .path("/encode/duration/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyDefaultDeserialize(
  result: PropertyDefault200Response
): Promise<DefaultDurationProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyDefault(
  context: Client,
  value: string,
  options: PropertyDefaultOptions = { requestOptions: {} }
): Promise<DefaultDurationProperty> {
  const result = await _propertyDefaultSend(context, value, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyIso8601Send(
  context: Client,
  value: string,
  options: PropertyIso8601Options = { requestOptions: {} }
): StreamableMethod<PropertyIso8601200Response> {
  return context
    .path("/encode/duration/property/iso8601")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyIso8601Deserialize(
  result: PropertyIso8601200Response
): Promise<ISO8601DurationProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyIso8601(
  context: Client,
  value: string,
  options: PropertyIso8601Options = { requestOptions: {} }
): Promise<ISO8601DurationProperty> {
  const result = await _propertyIso8601Send(context, value, options);
  return _propertyIso8601Deserialize(result);
}

export function _propertyInt32SecondsSend(
  context: Client,
  value: string,
  options: PropertyInt32SecondsOptions = { requestOptions: {} }
): StreamableMethod<PropertyInt32Seconds200Response> {
  return context
    .path("/encode/duration/property/int32-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyInt32SecondsDeserialize(
  result: PropertyInt32Seconds200Response
): Promise<Int32SecondsDurationProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyInt32Seconds(
  context: Client,
  value: string,
  options: PropertyInt32SecondsOptions = { requestOptions: {} }
): Promise<Int32SecondsDurationProperty> {
  const result = await _propertyInt32SecondsSend(context, value, options);
  return _propertyInt32SecondsDeserialize(result);
}

export function _propertyFloatSecondsSend(
  context: Client,
  value: string,
  options: PropertyFloatSecondsOptions = { requestOptions: {} }
): StreamableMethod<PropertyFloatSeconds200Response> {
  return context
    .path("/encode/duration/property/float-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyFloatSecondsDeserialize(
  result: PropertyFloatSeconds200Response
): Promise<FloatSecondsDurationProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyFloatSeconds(
  context: Client,
  value: string,
  options: PropertyFloatSecondsOptions = { requestOptions: {} }
): Promise<FloatSecondsDurationProperty> {
  const result = await _propertyFloatSecondsSend(context, value, options);
  return _propertyFloatSecondsDeserialize(result);
}

export function _propertyFloatSecondsArraySend(
  context: Client,
  value: number[],
  options: PropertyFloatSecondsArrayOptions = { requestOptions: {} }
): StreamableMethod<PropertyFloatSecondsArray200Response> {
  return context
    .path("/encode/duration/property/float-seconds-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyFloatSecondsArrayDeserialize(
  result: PropertyFloatSecondsArray200Response
): Promise<FloatSecondsDurationArrayProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyFloatSecondsArray(
  context: Client,
  value: number[],
  options: PropertyFloatSecondsArrayOptions = { requestOptions: {} }
): Promise<FloatSecondsDurationArrayProperty> {
  const result = await _propertyFloatSecondsArraySend(context, value, options);
  return _propertyFloatSecondsArrayDeserialize(result);
}
