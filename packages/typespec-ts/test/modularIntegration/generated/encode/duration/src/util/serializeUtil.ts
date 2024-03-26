// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FloatSecondsDurationArrayProperty,
  FloatSecondsDurationProperty,
  Int32SecondsDurationProperty,
  ISO8601DurationProperty,
  DefaultDurationProperty,
} from "../models/models.js";
import {
  FloatSecondsDurationArrayProperty as RestFloatSecondsDurationArrayProperty,
  FloatSecondsDurationProperty as RestFloatSecondsDurationProperty,
  Int32SecondsDurationProperty as RestInt32SecondsDurationProperty,
  ISO8601DurationProperty as RestISO8601DurationProperty,
  DefaultDurationProperty as RestDefaultDurationProperty,
} from "../rest/index.js";

export function serializeFloatSecondsDurationArrayProperty(
  o: FloatSecondsDurationArrayProperty,
): RestFloatSecondsDurationArrayProperty {
  return {
    value: o["value"].map((e: undefined) => FIXME),
  };
}

export function deserializeFloatSecondsDurationArrayProperty(
  o: RestFloatSecondsDurationArrayProperty,
): FloatSecondsDurationArrayProperty {
  return {
    value: o["value"].map((e: undefined) => FIXME),
  };
}

export function serializeFloatSecondsDurationProperty(
  o: FloatSecondsDurationProperty,
): RestFloatSecondsDurationProperty {
  return {
    value: FIXME,
  };
}

export function deserializeFloatSecondsDurationProperty(
  o: RestFloatSecondsDurationProperty,
): FloatSecondsDurationProperty {
  return {
    value: FIXME,
  };
}

export function serializeInt32SecondsDurationProperty(
  o: Int32SecondsDurationProperty,
): RestInt32SecondsDurationProperty {
  return {
    value: FIXME,
  };
}

export function deserializeInt32SecondsDurationProperty(
  o: RestInt32SecondsDurationProperty,
): Int32SecondsDurationProperty {
  return {
    value: FIXME,
  };
}

export function serializeISO8601DurationProperty(
  o: ISO8601DurationProperty,
): RestISO8601DurationProperty {
  return {
    value: FIXME,
  };
}

export function deserializeISO8601DurationProperty(
  o: RestISO8601DurationProperty,
): ISO8601DurationProperty {
  return {
    value: FIXME,
  };
}

export function serializeDefaultDurationProperty(
  o: DefaultDurationProperty,
): RestDefaultDurationProperty {
  return {
    value: FIXME,
  };
}

export function deserializeDefaultDurationProperty(
  o: RestDefaultDurationProperty,
): DefaultDurationProperty {
  return {
    value: FIXME,
  };
}
