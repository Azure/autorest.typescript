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
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Int32Value operations */
export interface Int32ValueOperations {
  get(
    options?: Int32ValueGetParameters
  ): StreamableMethod<Int32ValueGet200Response>;
  put(
    options: Int32ValuePutParameters
  ): StreamableMethod<Int32ValuePut204Response>;
}

/** Contains operations for Int64Value operations */
export interface Int64ValueOperations {
  get(
    options?: Int64ValueGetParameters
  ): StreamableMethod<Int64ValueGet200Response>;
  put(
    options: Int64ValuePutParameters
  ): StreamableMethod<Int64ValuePut204Response>;
}

/** Contains operations for BooleanValue operations */
export interface BooleanValueOperations {
  get(
    options?: BooleanValueGetParameters
  ): StreamableMethod<BooleanValueGet200Response>;
  put(
    options: BooleanValuePutParameters
  ): StreamableMethod<BooleanValuePut204Response>;
}

/** Contains operations for StringValue operations */
export interface StringValueOperations {
  get(
    options?: StringValueGetParameters
  ): StreamableMethod<StringValueGet200Response>;
  put(
    options: StringValuePutParameters
  ): StreamableMethod<StringValuePut204Response>;
}

/** Contains operations for Float32Value operations */
export interface Float32ValueOperations {
  get(
    options?: Float32ValueGetParameters
  ): StreamableMethod<Float32ValueGet200Response>;
  put(
    options: Float32ValuePutParameters
  ): StreamableMethod<Float32ValuePut204Response>;
}

/** Contains operations for DatetimeValue operations */
export interface DatetimeValueOperations {
  get(
    options?: DatetimeValueGetParameters
  ): StreamableMethod<DatetimeValueGet200Response>;
  put(
    options: DatetimeValuePutParameters
  ): StreamableMethod<DatetimeValuePut204Response>;
}

/** Contains operations for DurationValue operations */
export interface DurationValueOperations {
  get(
    options?: DurationValueGetParameters
  ): StreamableMethod<DurationValueGet200Response>;
  put(
    options: DurationValuePutParameters
  ): StreamableMethod<DurationValuePut204Response>;
}

/** Contains operations for UnknownValue operations */
export interface UnknownValueOperations {
  get(
    options?: UnknownValueGetParameters
  ): StreamableMethod<UnknownValueGet200Response>;
  put(
    options: UnknownValuePutParameters
  ): StreamableMethod<UnknownValuePut204Response>;
}

/** Contains operations for ModelValue operations */
export interface ModelValueOperations {
  get(
    options?: ModelValueGetParameters
  ): StreamableMethod<ModelValueGet200Response>;
  put(
    options: ModelValuePutParameters
  ): StreamableMethod<ModelValuePut204Response>;
}

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

export interface Routes {
  /** Resource for '/arrays/item-types/int32' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/int32"): Int32ValueGet;
  /** Resource for '/arrays/item-types/int64' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/int64"): Int64ValueGet;
  /** Resource for '/arrays/item-types/boolean' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/boolean"): BooleanValueGet;
  /** Resource for '/arrays/item-types/string' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/string"): StringValueGet;
  /** Resource for '/arrays/item-types/float32' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/float32"): Float32ValueGet;
  /** Resource for '/arrays/item-types/datetime' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/datetime"): DatetimeValueGet;
  /** Resource for '/arrays/item-types/duration' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/duration"): DurationValueGet;
  /** Resource for '/arrays/item-types/unknown' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/unknown"): UnknownValueGet;
  /** Resource for '/arrays/item-types/model' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/model"): ModelValueGet;
}

export type ArrayItemTypesClient = Client & {
  path: Routes;
  int32Value: Int32ValueOperations;
  int64Value: Int64ValueOperations;
  booleanValue: BooleanValueOperations;
  stringValue: StringValueOperations;
  float32Value: Float32ValueOperations;
  datetimeValue: DatetimeValueOperations;
  durationValue: DurationValueOperations;
  unknownValue: UnknownValueOperations;
  modelValue: ModelValueOperations;
};
