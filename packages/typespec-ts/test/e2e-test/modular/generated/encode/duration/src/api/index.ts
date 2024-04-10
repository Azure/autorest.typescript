// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createDuration,
  DurationClientOptions,
  DurationContext,
} from "./DurationContext.js";
export {
  headerDefault,
  headerIso8601,
  headerIso8601Array,
  headerInt32Seconds,
  headerFloatSeconds,
} from "./header/index.js";
export {
  propertyDefault,
  propertyIso8601,
  propertyInt32Seconds,
  propertyFloatSeconds,
  propertyFloatSecondsArray,
} from "./property/index.js";
export {
  queryDefault,
  queryIso8601,
  queryInt32Seconds,
  queryFloatSeconds,
  queryInt32SecondsArray,
} from "./query/index.js";
