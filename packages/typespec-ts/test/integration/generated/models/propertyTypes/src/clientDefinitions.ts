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
} from "./parameters";
import {
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  StringModelGet200Response,
  StringModelPut204Response,
  BytesGet200Response,
  BytesPut204Response,
  IntGet200Response,
  IntPut204Response,
  FloatGet200Response,
  FloatPut204Response,
  DatetimeGet200Response,
  DatetimePut204Response,
  DurationGet200Response,
  DurationPut204Response,
  EnumGet200Response,
  EnumPut204Response,
  ExtensibleEnumGet200Response,
  ExtensibleEnumPut204Response,
  ModelGet200Response,
  ModelPut204Response,
  CollectionsStringGet200Response,
  CollectionsStringPut204Response,
  CollectionsIntGet200Response,
  CollectionsIntPut204Response,
  CollectionsModelGet200Response,
  CollectionsModelPut204Response,
  DictionaryStringGet200Response,
  DictionaryStringPut204Response,
  NeverGet200Response,
  NeverPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BooleanModelGet {
  /** Get call */
  get(
    options?: BooleanModelGetParameters
  ): StreamableMethod<BooleanModelGet200Response>;
  /** Put operation */
  put(
    options: BooleanModelPutParameters
  ): StreamableMethod<BooleanModelPut204Response>;
}

export interface StringModelGet {
  /** Get call */
  get(
    options?: StringModelGetParameters
  ): StreamableMethod<StringModelGet200Response>;
  /** Put operation */
  put(
    options: StringModelPutParameters
  ): StreamableMethod<StringModelPut204Response>;
}

export interface BytesGet {
  /** Get call */
  get(options?: BytesGetParameters): StreamableMethod<BytesGet200Response>;
  /** Put operation */
  put(options: BytesPutParameters): StreamableMethod<BytesPut204Response>;
}

export interface IntGet {
  /** Get call */
  get(options?: IntGetParameters): StreamableMethod<IntGet200Response>;
  /** Put operation */
  put(options: IntPutParameters): StreamableMethod<IntPut204Response>;
}

export interface FloatGet {
  /** Get call */
  get(options?: FloatGetParameters): StreamableMethod<FloatGet200Response>;
  /** Put operation */
  put(options: FloatPutParameters): StreamableMethod<FloatPut204Response>;
}

export interface DatetimeGet {
  /** Get call */
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response>;
  /** Put operation */
  put(options: DatetimePutParameters): StreamableMethod<DatetimePut204Response>;
}

export interface DurationGet {
  /** Get call */
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response>;
  /** Put operation */
  put(options: DurationPutParameters): StreamableMethod<DurationPut204Response>;
}

export interface EnumGet {
  /** Get call */
  get(options?: EnumGetParameters): StreamableMethod<EnumGet200Response>;
  /** Put operation */
  put(options: EnumPutParameters): StreamableMethod<EnumPut204Response>;
}

export interface ExtensibleEnumGet {
  /** Get call */
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<ExtensibleEnumGet200Response>;
  /** Put operation */
  put(
    options: ExtensibleEnumPutParameters
  ): StreamableMethod<ExtensibleEnumPut204Response>;
}

export interface ModelGet {
  /** Get call */
  get(options?: ModelGetParameters): StreamableMethod<ModelGet200Response>;
  /** Put operation */
  put(options: ModelPutParameters): StreamableMethod<ModelPut204Response>;
}

export interface CollectionsStringGet {
  /** Get call */
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<CollectionsStringGet200Response>;
  /** Put operation */
  put(
    options: CollectionsStringPutParameters
  ): StreamableMethod<CollectionsStringPut204Response>;
}

export interface CollectionsIntGet {
  /** Get call */
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<CollectionsIntGet200Response>;
  /** Put operation */
  put(
    options: CollectionsIntPutParameters
  ): StreamableMethod<CollectionsIntPut204Response>;
}

export interface CollectionsModelGet {
  /** Get call */
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<CollectionsModelGet200Response>;
  /** Put operation */
  put(
    options: CollectionsModelPutParameters
  ): StreamableMethod<CollectionsModelPut204Response>;
}

export interface DictionaryStringGet {
  /** Get call */
  get(
    options?: DictionaryStringGetParameters
  ): StreamableMethod<DictionaryStringGet200Response>;
  /** Put operation */
  put(
    options: DictionaryStringPutParameters
  ): StreamableMethod<DictionaryStringPut204Response>;
}

export interface NeverGet {
  /** Get call */
  get(options?: NeverGetParameters): StreamableMethod<NeverGet200Response>;
  /** Put operation */
  put(options: NeverPutParameters): StreamableMethod<NeverPut204Response>;
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
}

export type TypePropertyValueTypesClient = Client & {
  path: Routes;
};
