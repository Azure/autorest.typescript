// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { DurationClient, DurationClientOptions } from "./durationClient.js";
export {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
  QueryDefaultOptionalParams,
  QueryIso8601OptionalParams,
  QueryInt32SecondsOptionalParams,
  QueryFloatSecondsOptionalParams,
  QueryInt32SecondsArrayOptionalParams,
  PropertyDefaultOptionalParams,
  PropertyIso8601OptionalParams,
  PropertyInt32SecondsOptionalParams,
  PropertyFloatSecondsOptionalParams,
  PropertyFloatSecondsArrayOptionalParams,
  HeaderDefaultOptionalParams,
  HeaderIso8601OptionalParams,
  HeaderIso8601ArrayOptionalParams,
  HeaderInt32SecondsOptionalParams,
  HeaderFloatSecondsOptionalParams,
} from "./models/index.js";
export {
  HeaderOperations,
  PropertyOperations,
  QueryOperations,
} from "./classic/index.js";
