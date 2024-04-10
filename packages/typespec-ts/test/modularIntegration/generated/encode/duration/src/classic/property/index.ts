// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/durationContext.js";
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
  PropertyDefaultOptionalParams,
  PropertyIso8601OptionalParams,
  PropertyInt32SecondsOptionalParams,
  PropertyFloatSecondsOptionalParams,
  PropertyFloatSecondsArrayOptionalParams,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDurationProperty,
    options?: PropertyDefaultOptionalParams,
  ) => Promise<DefaultDurationProperty>;
  iso8601: (
    body: ISO8601DurationProperty,
    options?: PropertyIso8601OptionalParams,
  ) => Promise<ISO8601DurationProperty>;
  int32Seconds: (
    body: Int32SecondsDurationProperty,
    options?: PropertyInt32SecondsOptionalParams,
  ) => Promise<Int32SecondsDurationProperty>;
  floatSeconds: (
    body: FloatSecondsDurationProperty,
    options?: PropertyFloatSecondsOptionalParams,
  ) => Promise<FloatSecondsDurationProperty>;
  floatSecondsArray: (
    body: FloatSecondsDurationArrayProperty,
    options?: PropertyFloatSecondsArrayOptionalParams,
  ) => Promise<FloatSecondsDurationArrayProperty>;
}

export function getProperty(context: DurationContext) {
  return {
    default: (
      body: DefaultDurationProperty,
      options?: PropertyDefaultOptionalParams,
    ) => propertyDefault(context, body, options),
    iso8601: (
      body: ISO8601DurationProperty,
      options?: PropertyIso8601OptionalParams,
    ) => propertyIso8601(context, body, options),
    int32Seconds: (
      body: Int32SecondsDurationProperty,
      options?: PropertyInt32SecondsOptionalParams,
    ) => propertyInt32Seconds(context, body, options),
    floatSeconds: (
      body: FloatSecondsDurationProperty,
      options?: PropertyFloatSecondsOptionalParams,
    ) => propertyFloatSeconds(context, body, options),
    floatSecondsArray: (
      body: FloatSecondsDurationArrayProperty,
      options?: PropertyFloatSecondsArrayOptionalParams,
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
