// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/DurationContext.js";
import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "../../models/models.js";
import {
  propertyDefault,
  propertyIso8601,
  propertyInt32Seconds,
  propertyFloatSeconds,
  propertyFloatSecondsArray,
} from "../../api/property/index.js";
import {
  DefaultOptions,
  Iso8601Options,
  Int32SecondsOptions,
  FloatSecondsOptions,
  FloatSecondsArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDurationProperty,
    options?: DefaultOptions,
  ) => Promise<DefaultDurationProperty>;
  iso8601: (
    body: ISO8601DurationProperty,
    options?: Iso8601Options,
  ) => Promise<ISO8601DurationProperty>;
  int32Seconds: (
    body: Int32SecondsDurationProperty,
    options?: Int32SecondsOptions,
  ) => Promise<Int32SecondsDurationProperty>;
  floatSeconds: (
    body: FloatSecondsDurationProperty,
    options?: FloatSecondsOptions,
  ) => Promise<FloatSecondsDurationProperty>;
  floatSecondsArray: (
    body: FloatSecondsDurationArrayProperty,
    options?: FloatSecondsArrayOptions,
  ) => Promise<FloatSecondsDurationArrayProperty>;
}

export function getProperty(context: DurationContext) {
  return {
    default: (body: DefaultDurationProperty, options?: DefaultOptions) =>
      propertyDefault(context, body, options),
    iso8601: (body: ISO8601DurationProperty, options?: Iso8601Options) =>
      propertyIso8601(context, body, options),
    int32Seconds: (
      body: Int32SecondsDurationProperty,
      options?: Int32SecondsOptions,
    ) => propertyInt32Seconds(context, body, options),
    floatSeconds: (
      body: FloatSecondsDurationProperty,
      options?: FloatSecondsOptions,
    ) => propertyFloatSeconds(context, body, options),
    floatSecondsArray: (
      body: FloatSecondsDurationArrayProperty,
      options?: FloatSecondsArrayOptions,
    ) => propertyFloatSecondsArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: DurationContext,
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
