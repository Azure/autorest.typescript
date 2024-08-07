// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createDuration,
  DurationContext,
  DurationClientOptionalParams,
} from "./durationContext.js";
export {
  headerDefault,
  headerIso8601,
  headerIso8601Array,
  headerInt32Seconds,
  headerFloatSeconds,
  headerFloat64Seconds,
} from "./header/index.js";
export {
  propertyDefault,
  propertyIso8601,
  propertyInt32Seconds,
  propertyFloatSeconds,
  propertyFloat64Seconds,
  propertyFloatSecondsArray,
} from "./property/index.js";
export {
  queryDefault,
  queryIso8601,
  queryInt32Seconds,
  queryFloatSeconds,
  queryFloat64Seconds,
  queryInt32SecondsArray,
} from "./query/index.js";
