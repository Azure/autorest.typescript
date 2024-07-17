// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createDuration,
  DurationClientOptionalParams,
  DurationContext,
} from "./durationContext.js";
export {
  QueryDefaultOptionalParams,
  QueryIso8601OptionalParams,
  QueryInt32SecondsOptionalParams,
  QueryFloatSecondsOptionalParams,
  QueryFloat64SecondsOptionalParams,
  QueryInt32SecondsArrayOptionalParams,
  PropertyDefaultOptionalParams,
  PropertyIso8601OptionalParams,
  PropertyInt32SecondsOptionalParams,
  PropertyFloatSecondsOptionalParams,
  PropertyFloat64SecondsOptionalParams,
  PropertyFloatSecondsArrayOptionalParams,
  HeaderDefaultOptionalParams,
  HeaderIso8601OptionalParams,
  HeaderIso8601ArrayOptionalParams,
  HeaderInt32SecondsOptionalParams,
  HeaderFloatSecondsOptionalParams,
  HeaderFloat64SecondsOptionalParams,
} from "./options.js";
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
