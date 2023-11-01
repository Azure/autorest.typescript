// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "../../models/models.js";
import {
  Default200Response,
  DurationContext as Client,
  FloatSeconds200Response,
  FloatSecondsArray200Response,
  Int32Seconds200Response,
  Iso8601200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  PropertyPropertyDefaultOptions,
  PropertyPropertyIso8601Options,
  PropertyPropertyInt32SecondsOptions,
  PropertyPropertyFloatSecondsOptions,
  PropertyPropertyFloatSecondsArrayOptions,
} from "../../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  body: DefaultDurationProperty,
  options: PropertyPropertyDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default200Response> {
  return context
    .path("/encode/duration/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyDefaultDeserialize(
  result: Default200Response
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
  body: DefaultDurationProperty,
  options: PropertyPropertyDefaultOptions = { requestOptions: {} }
): Promise<DefaultDurationProperty> {
  const result = await _propertyDefaultSend(context, body, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyIso8601Send(
  context: Client,
  body: ISO8601DurationProperty,
  options: PropertyPropertyIso8601Options = { requestOptions: {} }
): StreamableMethod<Iso8601200Response> {
  return context
    .path("/encode/duration/property/iso8601")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyIso8601Deserialize(
  result: Iso8601200Response
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
  body: ISO8601DurationProperty,
  options: PropertyPropertyIso8601Options = { requestOptions: {} }
): Promise<ISO8601DurationProperty> {
  const result = await _propertyIso8601Send(context, body, options);
  return _propertyIso8601Deserialize(result);
}

export function _propertyInt32SecondsSend(
  context: Client,
  body: Int32SecondsDurationProperty,
  options: PropertyPropertyInt32SecondsOptions = { requestOptions: {} }
): StreamableMethod<Int32Seconds200Response> {
  return context
    .path("/encode/duration/property/int32-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyInt32SecondsDeserialize(
  result: Int32Seconds200Response
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
  body: Int32SecondsDurationProperty,
  options: PropertyPropertyInt32SecondsOptions = { requestOptions: {} }
): Promise<Int32SecondsDurationProperty> {
  const result = await _propertyInt32SecondsSend(context, body, options);
  return _propertyInt32SecondsDeserialize(result);
}

export function _propertyFloatSecondsSend(
  context: Client,
  body: FloatSecondsDurationProperty,
  options: PropertyPropertyFloatSecondsOptions = { requestOptions: {} }
): StreamableMethod<FloatSeconds200Response> {
  return context
    .path("/encode/duration/property/float-seconds")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyFloatSecondsDeserialize(
  result: FloatSeconds200Response
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
  body: FloatSecondsDurationProperty,
  options: PropertyPropertyFloatSecondsOptions = { requestOptions: {} }
): Promise<FloatSecondsDurationProperty> {
  const result = await _propertyFloatSecondsSend(context, body, options);
  return _propertyFloatSecondsDeserialize(result);
}

export function _propertyFloatSecondsArraySend(
  context: Client,
  body: FloatSecondsDurationArrayProperty,
  options: PropertyPropertyFloatSecondsArrayOptions = { requestOptions: {} }
): StreamableMethod<FloatSecondsArray200Response> {
  return context
    .path("/encode/duration/property/float-seconds-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"] },
    });
}

export async function _propertyFloatSecondsArrayDeserialize(
  result: FloatSecondsArray200Response
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
  body: FloatSecondsDurationArrayProperty,
  options: PropertyPropertyFloatSecondsArrayOptions = { requestOptions: {} }
): Promise<FloatSecondsDurationArrayProperty> {
  const result = await _propertyFloatSecondsArraySend(context, body, options);
  return _propertyFloatSecondsArrayDeserialize(result);
}
