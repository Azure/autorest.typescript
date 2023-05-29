// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Int32ValueGetParameters,
  Int32ValuePutParameters,
  Int64ValueGetParameters,
  Int64ValuePutParameters,
  BooleanValueGetParameters,
  BooleanValuePutParameters,
  StringValueGetParameters,
  StringValuePutParameters,
  Float32ValueGetParameters,
  Float32ValuePutParameters,
  DatetimeValueGetParameters,
  DatetimeValuePutParameters,
  DurationValueGetParameters,
  DurationValuePutParameters,
  UnknownValueGetParameters,
  UnknownValuePutParameters,
  ModelValueGetParameters,
  ModelValuePutParameters,
  NullableFloatValueGetParameters,
  NullableFloatValuePutParameters,
} from "./parameters";
import {
  Int32ValueGet200Response,
  Int32ValuePut204Response,
  Int64ValueGet200Response,
  Int64ValuePut204Response,
  BooleanValueGet200Response,
  BooleanValuePut204Response,
  StringValueGet200Response,
  StringValuePut204Response,
  Float32ValueGet200Response,
  Float32ValuePut204Response,
  DatetimeValueGet200Response,
  DatetimeValuePut204Response,
  DurationValueGet200Response,
  DurationValuePut204Response,
  UnknownValueGet200Response,
  UnknownValuePut204Response,
  ModelValueGet200Response,
  ModelValuePut204Response,
  NullableFloatValueGet200Response,
  NullableFloatValuePut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Int32ValueGet {
  get(
    options?: Int32ValueGetParameters
  ): StreamableMethod<Int32ValueGet200Response>;
  put(
    options: Int32ValuePutParameters
  ): StreamableMethod<Int32ValuePut204Response>;
}

export interface Int64ValueGet {
  get(
    options?: Int64ValueGetParameters
  ): StreamableMethod<Int64ValueGet200Response>;
  put(
    options: Int64ValuePutParameters
  ): StreamableMethod<Int64ValuePut204Response>;
}

export interface BooleanValueGet {
  get(
    options?: BooleanValueGetParameters
  ): StreamableMethod<BooleanValueGet200Response>;
  put(
    options: BooleanValuePutParameters
  ): StreamableMethod<BooleanValuePut204Response>;
}

export interface StringValueGet {
  get(
    options?: StringValueGetParameters
  ): StreamableMethod<StringValueGet200Response>;
  put(
    options: StringValuePutParameters
  ): StreamableMethod<StringValuePut204Response>;
}

export interface Float32ValueGet {
  get(
    options?: Float32ValueGetParameters
  ): StreamableMethod<Float32ValueGet200Response>;
  put(
    options: Float32ValuePutParameters
  ): StreamableMethod<Float32ValuePut204Response>;
}

export interface DatetimeValueGet {
  get(
    options?: DatetimeValueGetParameters
  ): StreamableMethod<DatetimeValueGet200Response>;
  put(
    options: DatetimeValuePutParameters
  ): StreamableMethod<DatetimeValuePut204Response>;
}

export interface DurationValueGet {
  get(
    options?: DurationValueGetParameters
  ): StreamableMethod<DurationValueGet200Response>;
  put(
    options: DurationValuePutParameters
  ): StreamableMethod<DurationValuePut204Response>;
}

export interface UnknownValueGet {
  get(
    options?: UnknownValueGetParameters
  ): StreamableMethod<UnknownValueGet200Response>;
  put(
    options: UnknownValuePutParameters
  ): StreamableMethod<UnknownValuePut204Response>;
}

export interface ModelValueGet {
  get(
    options?: ModelValueGetParameters
  ): StreamableMethod<ModelValueGet200Response>;
  put(
    options: ModelValuePutParameters
  ): StreamableMethod<ModelValuePut204Response>;
}

export interface NullableFloatValueGet {
  get(
    options?: NullableFloatValueGetParameters
  ): StreamableMethod<NullableFloatValueGet200Response>;
  put(
    options: NullableFloatValuePutParameters
  ): StreamableMethod<NullableFloatValuePut204Response>;
}

export interface Routes {
  /** Resource for '/type/array/int32' has methods for the following verbs: get, put */
  (path: "/type/array/int32"): Int32ValueGet;
  /** Resource for '/type/array/int64' has methods for the following verbs: get, put */
  (path: "/type/array/int64"): Int64ValueGet;
  /** Resource for '/type/array/boolean' has methods for the following verbs: get, put */
  (path: "/type/array/boolean"): BooleanValueGet;
  /** Resource for '/type/array/string' has methods for the following verbs: get, put */
  (path: "/type/array/string"): StringValueGet;
  /** Resource for '/type/array/float32' has methods for the following verbs: get, put */
  (path: "/type/array/float32"): Float32ValueGet;
  /** Resource for '/type/array/datetime' has methods for the following verbs: get, put */
  (path: "/type/array/datetime"): DatetimeValueGet;
  /** Resource for '/type/array/duration' has methods for the following verbs: get, put */
  (path: "/type/array/duration"): DurationValueGet;
  /** Resource for '/type/array/unknown' has methods for the following verbs: get, put */
  (path: "/type/array/unknown"): UnknownValueGet;
  /** Resource for '/type/array/model' has methods for the following verbs: get, put */
  (path: "/type/array/model"): ModelValueGet;
  /** Resource for '/type/array/nullable-float' has methods for the following verbs: get, put */
  (path: "/type/array/nullable-float"): NullableFloatValueGet;
}

export type ArrayItemTypesClient = Client & {
  path: Routes;
};
