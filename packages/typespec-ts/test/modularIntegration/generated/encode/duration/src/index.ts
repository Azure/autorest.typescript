// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { DurationClient } from "./durationClient.js";
export {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  Float64SecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "./models/index.js";
export {
  DurationClientOptionalParams,
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
} from "./api/index.js";
export {
  HeaderOperations,
  PropertyOperations,
  QueryOperations,
} from "./classic/index.js";
