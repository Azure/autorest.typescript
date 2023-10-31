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
  PropertyPropertyDefaultOptions,
  PropertyPropertyIso8601Options,
  PropertyPropertyInt32SecondsOptions,
  PropertyPropertyFloatSecondsOptions,
  PropertyPropertyFloatSecondsArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDurationProperty,
    options?: PropertyPropertyDefaultOptions
  ) => Promise<DefaultDurationProperty>;
  iso8601: (
    body: ISO8601DurationProperty,
    options?: PropertyPropertyIso8601Options
  ) => Promise<ISO8601DurationProperty>;
  int32Seconds: (
    body: Int32SecondsDurationProperty,
    options?: PropertyPropertyInt32SecondsOptions
  ) => Promise<Int32SecondsDurationProperty>;
  floatSeconds: (
    body: FloatSecondsDurationProperty,
    options?: PropertyPropertyFloatSecondsOptions
  ) => Promise<FloatSecondsDurationProperty>;
  floatSecondsArray: (
    body: FloatSecondsDurationArrayProperty,
    options?: PropertyPropertyFloatSecondsArrayOptions
  ) => Promise<FloatSecondsDurationArrayProperty>;
}

export function getProperty(context: DurationContext) {
  return {
    default: (
      body: DefaultDurationProperty,
      options?: PropertyPropertyDefaultOptions
    ) => propertyDefault(context, body, options),
    iso8601: (
      body: ISO8601DurationProperty,
      options?: PropertyPropertyIso8601Options
    ) => propertyIso8601(context, body, options),
    int32Seconds: (
      body: Int32SecondsDurationProperty,
      options?: PropertyPropertyInt32SecondsOptions
    ) => propertyInt32Seconds(context, body, options),
    floatSeconds: (
      body: FloatSecondsDurationProperty,
      options?: PropertyPropertyFloatSecondsOptions
    ) => propertyFloatSeconds(context, body, options),
    floatSecondsArray: (
      body: FloatSecondsDurationArrayProperty,
      options?: PropertyPropertyFloatSecondsArrayOptions
    ) => propertyFloatSecondsArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: DurationContext
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
