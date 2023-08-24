// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BooleanModelGetParameters,
  BooleanModelPutParameters,
  StringModelGetParameters,
  StringModelPutParameters,
  BytesGetParameters,
  BytesPutParameters,
  IntGetParameters,
  IntPutParameters,
  FloatGetParameters,
  FloatPutParameters,
  DatetimeGetParameters,
  DatetimePutParameters,
  DurationGetParameters,
  DurationPutParameters,
  EnumGetParameters,
  EnumPutParameters,
  ExtensibleEnumGetParameters,
  ExtensibleEnumPutParameters,
  ModelGetParameters,
  ModelPutParameters,
  CollectionsStringGetParameters,
  CollectionsStringPutParameters,
  CollectionsIntGetParameters,
  CollectionsIntPutParameters,
  CollectionsModelGetParameters,
  CollectionsModelPutParameters,
  DictionaryStringGetParameters,
  DictionaryStringPutParameters,
  NeverGetParameters,
  NeverPutParameters,
  UnknownStringGetParameters,
  UnknownStringPutParameters,
  UnknownIntGetParameters,
  UnknownIntPutParameters,
  UnknownDictGetParameters,
  UnknownDictPutParameters,
  UnknownArrayGetParameters,
  UnknownArrayPutParameters,
} from "./parameters";
import {
  BooleanModelGet200Response,
  BooleanModelGetDefaultResponse,
  BooleanModelPut204Response,
  BooleanModelPutDefaultResponse,
  StringModelGet200Response,
  StringModelGetDefaultResponse,
  StringModelPut204Response,
  StringModelPutDefaultResponse,
  BytesGet200Response,
  BytesGetDefaultResponse,
  BytesPut204Response,
  BytesPutDefaultResponse,
  IntGet200Response,
  IntGetDefaultResponse,
  IntPut204Response,
  IntPutDefaultResponse,
  FloatGet200Response,
  FloatGetDefaultResponse,
  FloatPut204Response,
  FloatPutDefaultResponse,
  DatetimeGet200Response,
  DatetimeGetDefaultResponse,
  DatetimePut204Response,
  DatetimePutDefaultResponse,
  DurationGet200Response,
  DurationGetDefaultResponse,
  DurationPut204Response,
  DurationPutDefaultResponse,
  EnumGet200Response,
  EnumGetDefaultResponse,
  EnumPut204Response,
  EnumPutDefaultResponse,
  ExtensibleEnumGet200Response,
  ExtensibleEnumGetDefaultResponse,
  ExtensibleEnumPut204Response,
  ExtensibleEnumPutDefaultResponse,
  ModelGet200Response,
  ModelGetDefaultResponse,
  ModelPut204Response,
  ModelPutDefaultResponse,
  CollectionsStringGet200Response,
  CollectionsStringGetDefaultResponse,
  CollectionsStringPut204Response,
  CollectionsStringPutDefaultResponse,
  CollectionsIntGet200Response,
  CollectionsIntGetDefaultResponse,
  CollectionsIntPut204Response,
  CollectionsIntPutDefaultResponse,
  CollectionsModelGet200Response,
  CollectionsModelGetDefaultResponse,
  CollectionsModelPut204Response,
  CollectionsModelPutDefaultResponse,
  DictionaryStringGet200Response,
  DictionaryStringGetDefaultResponse,
  DictionaryStringPut204Response,
  DictionaryStringPutDefaultResponse,
  NeverGet200Response,
  NeverGetDefaultResponse,
  NeverPut204Response,
  NeverPutDefaultResponse,
  UnknownStringGet200Response,
  UnknownStringGetDefaultResponse,
  UnknownStringPut204Response,
  UnknownStringPutDefaultResponse,
  UnknownIntGet200Response,
  UnknownIntGetDefaultResponse,
  UnknownIntPut204Response,
  UnknownIntPutDefaultResponse,
  UnknownDictGet200Response,
  UnknownDictGetDefaultResponse,
  UnknownDictPut204Response,
  UnknownDictPutDefaultResponse,
  UnknownArrayGet200Response,
  UnknownArrayGetDefaultResponse,
  UnknownArrayPut204Response,
  UnknownArrayPutDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BooleanModelGet {
  /** Get call */
  get(
    options?: BooleanModelGetParameters
  ): StreamableMethod<
    BooleanModelGet200Response | BooleanModelGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: BooleanModelPutParameters
  ): StreamableMethod<
    BooleanModelPut204Response | BooleanModelPutDefaultResponse
  >;
}

export interface StringModelGet {
  /** Get call */
  get(
    options?: StringModelGetParameters
  ): StreamableMethod<
    StringModelGet200Response | StringModelGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: StringModelPutParameters
  ): StreamableMethod<
    StringModelPut204Response | StringModelPutDefaultResponse
  >;
}

export interface BytesGet {
  /** Get call */
  get(
    options?: BytesGetParameters
  ): StreamableMethod<BytesGet200Response | BytesGetDefaultResponse>;
  /** Put operation */
  put(
    options: BytesPutParameters
  ): StreamableMethod<BytesPut204Response | BytesPutDefaultResponse>;
}

export interface IntGet {
  /** Get call */
  get(
    options?: IntGetParameters
  ): StreamableMethod<IntGet200Response | IntGetDefaultResponse>;
  /** Put operation */
  put(
    options: IntPutParameters
  ): StreamableMethod<IntPut204Response | IntPutDefaultResponse>;
}

export interface FloatGet {
  /** Get call */
  get(
    options?: FloatGetParameters
  ): StreamableMethod<FloatGet200Response | FloatGetDefaultResponse>;
  /** Put operation */
  put(
    options: FloatPutParameters
  ): StreamableMethod<FloatPut204Response | FloatPutDefaultResponse>;
}

export interface DatetimeGet {
  /** Get call */
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response | DatetimeGetDefaultResponse>;
  /** Put operation */
  put(
    options: DatetimePutParameters
  ): StreamableMethod<DatetimePut204Response | DatetimePutDefaultResponse>;
}

export interface DurationGet {
  /** Get call */
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response | DurationGetDefaultResponse>;
  /** Put operation */
  put(
    options: DurationPutParameters
  ): StreamableMethod<DurationPut204Response | DurationPutDefaultResponse>;
}

export interface EnumGet {
  /** Get call */
  get(
    options?: EnumGetParameters
  ): StreamableMethod<EnumGet200Response | EnumGetDefaultResponse>;
  /** Put operation */
  put(
    options: EnumPutParameters
  ): StreamableMethod<EnumPut204Response | EnumPutDefaultResponse>;
}

export interface ExtensibleEnumGet {
  /** Get call */
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<
    ExtensibleEnumGet200Response | ExtensibleEnumGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: ExtensibleEnumPutParameters
  ): StreamableMethod<
    ExtensibleEnumPut204Response | ExtensibleEnumPutDefaultResponse
  >;
}

export interface ModelGet {
  /** Get call */
  get(
    options?: ModelGetParameters
  ): StreamableMethod<ModelGet200Response | ModelGetDefaultResponse>;
  /** Put operation */
  put(
    options: ModelPutParameters
  ): StreamableMethod<ModelPut204Response | ModelPutDefaultResponse>;
}

export interface CollectionsStringGet {
  /** Get call */
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<
    CollectionsStringGet200Response | CollectionsStringGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: CollectionsStringPutParameters
  ): StreamableMethod<
    CollectionsStringPut204Response | CollectionsStringPutDefaultResponse
  >;
}

export interface CollectionsIntGet {
  /** Get call */
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<
    CollectionsIntGet200Response | CollectionsIntGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: CollectionsIntPutParameters
  ): StreamableMethod<
    CollectionsIntPut204Response | CollectionsIntPutDefaultResponse
  >;
}

export interface CollectionsModelGet {
  /** Get call */
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<
    CollectionsModelGet200Response | CollectionsModelGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: CollectionsModelPutParameters
  ): StreamableMethod<
    CollectionsModelPut204Response | CollectionsModelPutDefaultResponse
  >;
}

export interface DictionaryStringGet {
  /** Get call */
  get(
    options?: DictionaryStringGetParameters
  ): StreamableMethod<
    DictionaryStringGet200Response | DictionaryStringGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: DictionaryStringPutParameters
  ): StreamableMethod<
    DictionaryStringPut204Response | DictionaryStringPutDefaultResponse
  >;
}

export interface NeverGet {
  /** Get call */
  get(
    options?: NeverGetParameters
  ): StreamableMethod<NeverGet200Response | NeverGetDefaultResponse>;
  /** Put operation */
  put(
    options: NeverPutParameters
  ): StreamableMethod<NeverPut204Response | NeverPutDefaultResponse>;
}

export interface UnknownStringGet {
  /** Get call */
  get(
    options?: UnknownStringGetParameters
  ): StreamableMethod<
    UnknownStringGet200Response | UnknownStringGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: UnknownStringPutParameters
  ): StreamableMethod<
    UnknownStringPut204Response | UnknownStringPutDefaultResponse
  >;
}

export interface UnknownIntGet {
  /** Get call */
  get(
    options?: UnknownIntGetParameters
  ): StreamableMethod<UnknownIntGet200Response | UnknownIntGetDefaultResponse>;
  /** Put operation */
  put(
    options: UnknownIntPutParameters
  ): StreamableMethod<UnknownIntPut204Response | UnknownIntPutDefaultResponse>;
}

export interface UnknownDictGet {
  /** Get call */
  get(
    options?: UnknownDictGetParameters
  ): StreamableMethod<
    UnknownDictGet200Response | UnknownDictGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: UnknownDictPutParameters
  ): StreamableMethod<
    UnknownDictPut204Response | UnknownDictPutDefaultResponse
  >;
}

export interface UnknownArrayGet {
  /** Get call */
  get(
    options?: UnknownArrayGetParameters
  ): StreamableMethod<
    UnknownArrayGet200Response | UnknownArrayGetDefaultResponse
  >;
  /** Put operation */
  put(
    options: UnknownArrayPutParameters
  ): StreamableMethod<
    UnknownArrayPut204Response | UnknownArrayPutDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/type/property/value-types/boolean' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/boolean"): BooleanModelGet;
  /** Resource for '/type/property/value-types/string' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/string"): StringModelGet;
  /** Resource for '/type/property/value-types/bytes' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/bytes"): BytesGet;
  /** Resource for '/type/property/value-types/int' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/int"): IntGet;
  /** Resource for '/type/property/value-types/float' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/float"): FloatGet;
  /** Resource for '/type/property/value-types/datetime' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/datetime"): DatetimeGet;
  /** Resource for '/type/property/value-types/duration' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/duration"): DurationGet;
  /** Resource for '/type/property/value-types/enum' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/enum"): EnumGet;
  /** Resource for '/type/property/value-types/extensible-enum' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/extensible-enum"): ExtensibleEnumGet;
  /** Resource for '/type/property/value-types/model' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/model"): ModelGet;
  /** Resource for '/type/property/value-types/collections/string' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/collections/string"): CollectionsStringGet;
  /** Resource for '/type/property/value-types/collections/int' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/collections/int"): CollectionsIntGet;
  /** Resource for '/type/property/value-types/collections/model' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/collections/model"): CollectionsModelGet;
  /** Resource for '/type/property/value-types/dictionary/string' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/dictionary/string"): DictionaryStringGet;
  /** Resource for '/type/property/value-types/never' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/never"): NeverGet;
  /** Resource for '/type/property/value-types/unknown/string' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/unknown/string"): UnknownStringGet;
  /** Resource for '/type/property/value-types/unknown/int' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/unknown/int"): UnknownIntGet;
  /** Resource for '/type/property/value-types/unknown/dict' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/unknown/dict"): UnknownDictGet;
  /** Resource for '/type/property/value-types/unknown/array' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/unknown/array"): UnknownArrayGet;
}

export type ValueTypesClient = Client & {
  path: Routes;
};
