// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BooleanGetParameters,
  BooleanPutParameters,
  StringGetParameters,
  StringPutParameters,
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
  NullableModelGetParameters,
  NullableModelPutParameters,
  CollectionsStringGetParameters,
  CollectionsStringPutParameters,
  CollectionsIntGetParameters,
  CollectionsIntPutParameters,
  CollectionsModelGetParameters,
  CollectionsModelPutParameters,
  CollectionsNullableItemGetParameters,
  CollectionsNullableItemPutParameters,
  DictionaryStringGetParameters,
  DictionaryStringPutParameters,
  DictionaryNullableValueGetParameters,
  DictionaryNullableValuePutParameters,
  NeverGetParameters,
  NeverPutParameters,
} from "./parameters";
import {
  BooleanGet200Response,
  BooleanPut204Response,
  StringGet200Response,
  StringPut204Response,
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
  NullableModelGet200Response,
  NullableModelPut204Response,
  CollectionsStringGet200Response,
  CollectionsStringPut204Response,
  CollectionsIntGet200Response,
  CollectionsIntPut204Response,
  CollectionsModelGet200Response,
  CollectionsModelPut204Response,
  CollectionsNullableItemGet200Response,
  CollectionsNullableItemPut204Response,
  DictionaryStringGet200Response,
  DictionaryStringPut204Response,
  DictionaryNullableValueGet200Response,
  DictionaryNullableValuePut204Response,
  NeverGet200Response,
  NeverPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BooleanGet {
  /** Get call */
  get(options?: BooleanGetParameters): StreamableMethod<BooleanGet200Response>;
  /** Put operation */
  put(options: BooleanPutParameters): StreamableMethod<BooleanPut204Response>;
}

export interface StringGet {
  /** Get call */
  get(options?: StringGetParameters): StreamableMethod<StringGet200Response>;
  /** Put operation */
  put(options: StringPutParameters): StreamableMethod<StringPut204Response>;
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

export interface NullableModelGet {
  /** Get call */
  get(
    options?: NullableModelGetParameters
  ): StreamableMethod<NullableModelGet200Response>;
  /** Put operation */
  put(
    options: NullableModelPutParameters
  ): StreamableMethod<NullableModelPut204Response>;
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

export interface CollectionsNullableItemGet {
  /** Get call */
  get(
    options?: CollectionsNullableItemGetParameters
  ): StreamableMethod<CollectionsNullableItemGet200Response>;
  /** Put operation */
  put(
    options: CollectionsNullableItemPutParameters
  ): StreamableMethod<CollectionsNullableItemPut204Response>;
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

export interface DictionaryNullableValueGet {
  /** Get call */
  get(
    options?: DictionaryNullableValueGetParameters
  ): StreamableMethod<DictionaryNullableValueGet200Response>;
  /** Put operation */
  put(
    options: DictionaryNullableValuePutParameters
  ): StreamableMethod<DictionaryNullableValuePut204Response>;
}

export interface NeverGet {
  /** Get call */
  get(options?: NeverGetParameters): StreamableMethod<NeverGet200Response>;
  /** Put operation */
  put(options: NeverPutParameters): StreamableMethod<NeverPut204Response>;
}

export interface Routes {
  /** Resource for '/models/properties/types/boolean' has methods for the following verbs: get, put */
  (path: "/models/properties/types/boolean"): BooleanGet;
  /** Resource for '/models/properties/types/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/string"): StringGet;
  /** Resource for '/models/properties/types/bytes' has methods for the following verbs: get, put */
  (path: "/models/properties/types/bytes"): BytesGet;
  /** Resource for '/models/properties/types/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/int"): IntGet;
  /** Resource for '/models/properties/types/float' has methods for the following verbs: get, put */
  (path: "/models/properties/types/float"): FloatGet;
  /** Resource for '/models/properties/types/datetime' has methods for the following verbs: get, put */
  (path: "/models/properties/types/datetime"): DatetimeGet;
  /** Resource for '/models/properties/types/duration' has methods for the following verbs: get, put */
  (path: "/models/properties/types/duration"): DurationGet;
  /** Resource for '/models/properties/types/enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/enum"): EnumGet;
  /** Resource for '/models/properties/types/extensible-enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/extensible-enum"): ExtensibleEnumGet;
  /** Resource for '/models/properties/types/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/model"): ModelGet;
  /** Resource for '/models/properties/types/nullable-model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/nullable-model"): NullableModelGet;
  /** Resource for '/models/properties/types/collections/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/string"): CollectionsStringGet;
  /** Resource for '/models/properties/types/collections/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/int"): CollectionsIntGet;
  /** Resource for '/models/properties/types/collections/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/model"): CollectionsModelGet;
  /** Resource for '/models/properties/types/collections/nullable-item' has methods for the following verbs: get, put */
  (
    path: "/models/properties/types/collections/nullable-item"
  ): CollectionsNullableItemGet;
  /** Resource for '/models/properties/types/dictionary/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/dictionary/string"): DictionaryStringGet;
  /** Resource for '/models/properties/types/dictionary/nullable-value' has methods for the following verbs: get, put */
  (
    path: "/models/properties/types/dictionary/nullable-value"
  ): DictionaryNullableValueGet;
  /** Resource for '/models/properties/types/never' has methods for the following verbs: get, put */
  (path: "/models/properties/types/never"): NeverGet;
}

export type ModelsPropertyTypesClient = Client & {
  path: Routes;
};
