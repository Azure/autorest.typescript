// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface DefaultDurationProperty {
  value: string;
}

export function defaultDurationPropertySerializer(
  item: DefaultDurationProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}

export interface ISO8601DurationProperty {
  value: string;
}

export function iSO8601DurationPropertySerializer(
  item: ISO8601DurationProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}

export interface Int32SecondsDurationProperty {
  value: number;
}

export function int32SecondsDurationPropertySerializer(
  item: Int32SecondsDurationProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}

export interface FloatSecondsDurationProperty {
  value: number;
}

export function floatSecondsDurationPropertySerializer(
  item: FloatSecondsDurationProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}

export interface Float64SecondsDurationProperty {
  value: number;
}

export function float64SecondsDurationPropertySerializer(
  item: Float64SecondsDurationProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}

export interface FloatSecondsDurationArrayProperty {
  value: number[];
}

export function floatSecondsDurationArrayPropertySerializer(
  item: FloatSecondsDurationArrayProperty,
): Record<string, unknown> {
  return {
    value: item["value"],
  };
}
