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
  Int32ValueGetDefaultResponse,
  Int32ValuePut204Response,
  Int32ValuePutDefaultResponse,
  Int64ValueGet200Response,
  Int64ValueGetDefaultResponse,
  Int64ValuePut204Response,
  Int64ValuePutDefaultResponse,
  BooleanValueGet200Response,
  BooleanValueGetDefaultResponse,
  BooleanValuePut204Response,
  BooleanValuePutDefaultResponse,
  StringValueGet200Response,
  StringValueGetDefaultResponse,
  StringValuePut204Response,
  StringValuePutDefaultResponse,
  Float32ValueGet200Response,
  Float32ValueGetDefaultResponse,
  Float32ValuePut204Response,
  Float32ValuePutDefaultResponse,
  DatetimeValueGet200Response,
  DatetimeValueGetDefaultResponse,
  DatetimeValuePut204Response,
  DatetimeValuePutDefaultResponse,
  DurationValueGet200Response,
  DurationValueGetDefaultResponse,
  DurationValuePut204Response,
  DurationValuePutDefaultResponse,
  UnknownValueGet200Response,
  UnknownValueGetDefaultResponse,
  UnknownValuePut204Response,
  UnknownValuePutDefaultResponse,
  ModelValueGet200Response,
  ModelValueGetDefaultResponse,
  ModelValuePut204Response,
  ModelValuePutDefaultResponse,
  NullableFloatValueGet200Response,
  NullableFloatValueGetDefaultResponse,
  NullableFloatValuePut204Response,
  NullableFloatValuePutDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Int32ValueGet {
  get(
    options?: Int32ValueGetParameters
  ): StreamableMethod<Int32ValueGet200Response | Int32ValueGetDefaultResponse>;
  put(
    options: Int32ValuePutParameters
  ): StreamableMethod<Int32ValuePut204Response | Int32ValuePutDefaultResponse>;
}

export interface Int64ValueGet {
  get(
    options?: Int64ValueGetParameters
  ): StreamableMethod<Int64ValueGet200Response | Int64ValueGetDefaultResponse>;
  put(
    options: Int64ValuePutParameters
  ): StreamableMethod<Int64ValuePut204Response | Int64ValuePutDefaultResponse>;
}

export interface BooleanValueGet {
  get(
    options?: BooleanValueGetParameters
  ): StreamableMethod<
    BooleanValueGet200Response | BooleanValueGetDefaultResponse
  >;
  put(
    options: BooleanValuePutParameters
  ): StreamableMethod<
    BooleanValuePut204Response | BooleanValuePutDefaultResponse
  >;
}

export interface StringValueGet {
  get(
    options?: StringValueGetParameters
  ): StreamableMethod<
    StringValueGet200Response | StringValueGetDefaultResponse
  >;
  put(
    options: StringValuePutParameters
  ): StreamableMethod<
    StringValuePut204Response | StringValuePutDefaultResponse
  >;
}

export interface Float32ValueGet {
  get(
    options?: Float32ValueGetParameters
  ): StreamableMethod<
    Float32ValueGet200Response | Float32ValueGetDefaultResponse
  >;
  put(
    options: Float32ValuePutParameters
  ): StreamableMethod<
    Float32ValuePut204Response | Float32ValuePutDefaultResponse
  >;
}

export interface DatetimeValueGet {
  get(
    options?: DatetimeValueGetParameters
  ): StreamableMethod<
    DatetimeValueGet200Response | DatetimeValueGetDefaultResponse
  >;
  put(
    options: DatetimeValuePutParameters
  ): StreamableMethod<
    DatetimeValuePut204Response | DatetimeValuePutDefaultResponse
  >;
}

export interface DurationValueGet {
  get(
    options?: DurationValueGetParameters
  ): StreamableMethod<
    DurationValueGet200Response | DurationValueGetDefaultResponse
  >;
  put(
    options: DurationValuePutParameters
  ): StreamableMethod<
    DurationValuePut204Response | DurationValuePutDefaultResponse
  >;
}

export interface UnknownValueGet {
  get(
    options?: UnknownValueGetParameters
  ): StreamableMethod<
    UnknownValueGet200Response | UnknownValueGetDefaultResponse
  >;
  put(
    options: UnknownValuePutParameters
  ): StreamableMethod<
    UnknownValuePut204Response | UnknownValuePutDefaultResponse
  >;
}

export interface ModelValueGet {
  get(
    options?: ModelValueGetParameters
  ): StreamableMethod<ModelValueGet200Response | ModelValueGetDefaultResponse>;
  put(
    options: ModelValuePutParameters
  ): StreamableMethod<ModelValuePut204Response | ModelValuePutDefaultResponse>;
}

export interface NullableFloatValueGet {
  get(
    options?: NullableFloatValueGetParameters
  ): StreamableMethod<
    NullableFloatValueGet200Response | NullableFloatValueGetDefaultResponse
  >;
  put(
    options: NullableFloatValuePutParameters
  ): StreamableMethod<
    NullableFloatValuePut204Response | NullableFloatValuePutDefaultResponse
  >;
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
