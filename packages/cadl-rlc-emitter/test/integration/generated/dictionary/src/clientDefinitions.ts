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
  RecursiveModelValueGetParameters,
  RecursiveModelValuePutParameters,
} from "./parameters";
import {
  Int32ValueGet204Response,
  Int32ValuePut200Response,
  Int64ValueGet204Response,
  Int64ValuePut200Response,
  BooleanValueGet204Response,
  BooleanValuePut200Response,
  StringValueGet204Response,
  StringValuePut200Response,
  Float32ValueGet204Response,
  Float32ValuePut200Response,
  DatetimeValueGet204Response,
  DatetimeValuePut200Response,
  DurationValueGet204Response,
  DurationValuePut200Response,
  UnknownValueGet204Response,
  UnknownValuePut200Response,
  ModelValueGet204Response,
  ModelValuePut200Response,
  RecursiveModelValueGet204Response,
  RecursiveModelValuePut200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Int32Value operations */
export interface Int32ValueOperations {
  get(
    options?: Int32ValueGetParameters
  ): StreamableMethod<Int32ValueGet204Response>;
  put(
    options: Int32ValuePutParameters
  ): StreamableMethod<Int32ValuePut200Response>;
}

/** Contains operations for Int64Value operations */
export interface Int64ValueOperations {
  get(
    options?: Int64ValueGetParameters
  ): StreamableMethod<Int64ValueGet204Response>;
  put(
    options: Int64ValuePutParameters
  ): StreamableMethod<Int64ValuePut200Response>;
}

/** Contains operations for BooleanValue operations */
export interface BooleanValueOperations {
  get(
    options?: BooleanValueGetParameters
  ): StreamableMethod<BooleanValueGet204Response>;
  put(
    options: BooleanValuePutParameters
  ): StreamableMethod<BooleanValuePut200Response>;
}

/** Contains operations for StringValue operations */
export interface StringValueOperations {
  get(
    options?: StringValueGetParameters
  ): StreamableMethod<StringValueGet204Response>;
  put(
    options: StringValuePutParameters
  ): StreamableMethod<StringValuePut200Response>;
}

/** Contains operations for Float32Value operations */
export interface Float32ValueOperations {
  get(
    options?: Float32ValueGetParameters
  ): StreamableMethod<Float32ValueGet204Response>;
  put(
    options: Float32ValuePutParameters
  ): StreamableMethod<Float32ValuePut200Response>;
}

/** Contains operations for DatetimeValue operations */
export interface DatetimeValueOperations {
  get(
    options?: DatetimeValueGetParameters
  ): StreamableMethod<DatetimeValueGet204Response>;
  put(
    options: DatetimeValuePutParameters
  ): StreamableMethod<DatetimeValuePut200Response>;
}

/** Contains operations for DurationValue operations */
export interface DurationValueOperations {
  get(
    options?: DurationValueGetParameters
  ): StreamableMethod<DurationValueGet204Response>;
  put(
    options: DurationValuePutParameters
  ): StreamableMethod<DurationValuePut200Response>;
}

/** Contains operations for UnknownValue operations */
export interface UnknownValueOperations {
  get(
    options?: UnknownValueGetParameters
  ): StreamableMethod<UnknownValueGet204Response>;
  put(
    options: UnknownValuePutParameters
  ): StreamableMethod<UnknownValuePut200Response>;
}

/** Contains operations for ModelValue operations */
export interface ModelValueOperations {
  get(
    options?: ModelValueGetParameters
  ): StreamableMethod<ModelValueGet204Response>;
  put(
    options: ModelValuePutParameters
  ): StreamableMethod<ModelValuePut200Response>;
}

/** Contains operations for RecursiveModelValue operations */
export interface RecursiveModelValueOperations {
  get(
    options?: RecursiveModelValueGetParameters
  ): StreamableMethod<RecursiveModelValueGet204Response>;
  put(
    options: RecursiveModelValuePutParameters
  ): StreamableMethod<RecursiveModelValuePut200Response>;
}

export interface Int32ValueGet {
  get(
    options?: Int32ValueGetParameters
  ): StreamableMethod<Int32ValueGet204Response>;
  put(
    options: Int32ValuePutParameters
  ): StreamableMethod<Int32ValuePut200Response>;
}

export interface Int64ValueGet {
  get(
    options?: Int64ValueGetParameters
  ): StreamableMethod<Int64ValueGet204Response>;
  put(
    options: Int64ValuePutParameters
  ): StreamableMethod<Int64ValuePut200Response>;
}

export interface BooleanValueGet {
  get(
    options?: BooleanValueGetParameters
  ): StreamableMethod<BooleanValueGet204Response>;
  put(
    options: BooleanValuePutParameters
  ): StreamableMethod<BooleanValuePut200Response>;
}

export interface StringValueGet {
  get(
    options?: StringValueGetParameters
  ): StreamableMethod<StringValueGet204Response>;
  put(
    options: StringValuePutParameters
  ): StreamableMethod<StringValuePut200Response>;
}

export interface Float32ValueGet {
  get(
    options?: Float32ValueGetParameters
  ): StreamableMethod<Float32ValueGet204Response>;
  put(
    options: Float32ValuePutParameters
  ): StreamableMethod<Float32ValuePut200Response>;
}

export interface DatetimeValueGet {
  get(
    options?: DatetimeValueGetParameters
  ): StreamableMethod<DatetimeValueGet204Response>;
  put(
    options: DatetimeValuePutParameters
  ): StreamableMethod<DatetimeValuePut200Response>;
}

export interface DurationValueGet {
  get(
    options?: DurationValueGetParameters
  ): StreamableMethod<DurationValueGet204Response>;
  put(
    options: DurationValuePutParameters
  ): StreamableMethod<DurationValuePut200Response>;
}

export interface UnknownValueGet {
  get(
    options?: UnknownValueGetParameters
  ): StreamableMethod<UnknownValueGet204Response>;
  put(
    options: UnknownValuePutParameters
  ): StreamableMethod<UnknownValuePut200Response>;
}

export interface ModelValueGet {
  get(
    options?: ModelValueGetParameters
  ): StreamableMethod<ModelValueGet204Response>;
  put(
    options: ModelValuePutParameters
  ): StreamableMethod<ModelValuePut200Response>;
}

export interface RecursiveModelValueGet {
  get(
    options?: RecursiveModelValueGetParameters
  ): StreamableMethod<RecursiveModelValueGet204Response>;
  put(
    options: RecursiveModelValuePutParameters
  ): StreamableMethod<RecursiveModelValuePut200Response>;
}

export interface Routes {
  /** Resource for '/dictionary/int32' has methods for the following verbs: get, put */
  (path: "/dictionary/int32"): Int32ValueGet;
  /** Resource for '/dictionary/int64' has methods for the following verbs: get, put */
  (path: "/dictionary/int64"): Int64ValueGet;
  /** Resource for '/dictionary/boolean' has methods for the following verbs: get, put */
  (path: "/dictionary/boolean"): BooleanValueGet;
  /** Resource for '/dictionary/string' has methods for the following verbs: get, put */
  (path: "/dictionary/string"): StringValueGet;
  /** Resource for '/dictionary/float32' has methods for the following verbs: get, put */
  (path: "/dictionary/float32"): Float32ValueGet;
  /** Resource for '/dictionary/datetime' has methods for the following verbs: get, put */
  (path: "/dictionary/datetime"): DatetimeValueGet;
  /** Resource for '/dictionary/duration' has methods for the following verbs: get, put */
  (path: "/dictionary/duration"): DurationValueGet;
  /** Resource for '/dictionary/unknown' has methods for the following verbs: get, put */
  (path: "/dictionary/unknown"): UnknownValueGet;
  /** Resource for '/dictionary/model' has methods for the following verbs: get, put */
  (path: "/dictionary/model"): ModelValueGet;
  /** Resource for '/dictionary/model/recursive' has methods for the following verbs: get, put */
  (path: "/dictionary/model/recursive"): RecursiveModelValueGet;
}

export type DictClient = Client & {
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
  recursiveModelValue: RecursiveModelValueOperations;
};
