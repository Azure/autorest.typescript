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
  PropertyDefaultOptions,
  PropertyIso8601Options,
  PropertyInt32SecondsOptions,
  PropertyFloatSecondsOptions,
  PropertyFloatSecondsArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDurationProperty,
    options?: PropertyDefaultOptions,
  ) => Promise<DefaultDurationProperty>;
  iso8601: (
    body: ISO8601DurationProperty,
    options?: PropertyIso8601Options,
  ) => Promise<ISO8601DurationProperty>;
  int32Seconds: (
    body: Int32SecondsDurationProperty,
    options?: PropertyInt32SecondsOptions,
  ) => Promise<Int32SecondsDurationProperty>;
  floatSeconds: (
    body: FloatSecondsDurationProperty,
    options?: PropertyFloatSecondsOptions,
  ) => Promise<FloatSecondsDurationProperty>;
  floatSecondsArray: (
    body: FloatSecondsDurationArrayProperty,
    options?: PropertyFloatSecondsArrayOptions,
  ) => Promise<FloatSecondsDurationArrayProperty>;
}

export function getProperty(context: DurationContext) {
  return {
    default: (
      body: DefaultDurationProperty,
      options?: PropertyDefaultOptions,
    ) => propertyDefault(context, body, options),
    iso8601: (
      body: ISO8601DurationProperty,
      options?: PropertyIso8601Options,
    ) => propertyIso8601(context, body, options),
    int32Seconds: (
      body: Int32SecondsDurationProperty,
      options?: PropertyInt32SecondsOptions,
    ) => propertyInt32Seconds(context, body, options),
    floatSeconds: (
      body: FloatSecondsDurationProperty,
      options?: PropertyFloatSecondsOptions,
    ) => propertyFloatSeconds(context, body, options),
    floatSecondsArray: (
      body: FloatSecondsDurationArrayProperty,
      options?: PropertyFloatSecondsArrayOptions,
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
