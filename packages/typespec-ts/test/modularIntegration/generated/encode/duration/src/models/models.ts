// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDurationProperty as DefaultDurationPropertyRest,
  ISO8601DurationProperty as ISO8601DurationPropertyRest,
  Int32SecondsDurationProperty as Int32SecondsDurationPropertyRest,
  FloatSecondsDurationProperty as FloatSecondsDurationPropertyRest,
  Float64SecondsDurationProperty as Float64SecondsDurationPropertyRest,
  FloatSecondsDurationArrayProperty as FloatSecondsDurationArrayPropertyRest,
} from "../rest/index.js";

export interface DefaultDurationProperty {
  value: string;
}

export function defaultDurationPropertySerializer(
  item: DefaultDurationProperty,
): DefaultDurationPropertyRest {
  return {
    value: item["value"],
  };
}

export interface ISO8601DurationProperty {
  value: string;
}

export function iSO8601DurationPropertySerializer(
  item: ISO8601DurationProperty,
): ISO8601DurationPropertyRest {
  return {
    value: item["value"],
  };
}

export interface Int32SecondsDurationProperty {
  value: number;
}

export function int32SecondsDurationPropertySerializer(
  item: Int32SecondsDurationProperty,
): Int32SecondsDurationPropertyRest {
  return {
    value: item["value"],
  };
}

export interface FloatSecondsDurationProperty {
  value: number;
}

export function floatSecondsDurationPropertySerializer(
  item: FloatSecondsDurationProperty,
): FloatSecondsDurationPropertyRest {
  return {
    value: item["value"],
  };
}

export interface Float64SecondsDurationProperty {
  value: number;
}

export function float64SecondsDurationPropertySerializer(
  item: Float64SecondsDurationProperty,
): Float64SecondsDurationPropertyRest {
  return {
    value: item["value"],
  };
}

export interface FloatSecondsDurationArrayProperty {
  value: number[];
}

export function floatSecondsDurationArrayPropertySerializer(
  item: FloatSecondsDurationArrayProperty,
): FloatSecondsDurationArrayPropertyRest {
  return {
    value: item["value"],
  };
}
