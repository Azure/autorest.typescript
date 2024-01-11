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
  DecimalGetParameters,
  DecimalPutParameters,
  Decimal128GetParameters,
  Decimal128PutParameters,
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
  StringLiteralGetParameters,
  StringLiteralPutParameters,
  IntLiteralGetParameters,
  IntLiteralPutParameters,
  FloatLiteralGetParameters,
  FloatLiteralPutParameters,
  BooleanLiteralGetParameters,
  BooleanLiteralPutParameters,
  UnionStringLiteralGetParameters,
  UnionStringLiteralPutParameters,
  UnionIntLiteralGetParameters,
  UnionIntLiteralPutParameters,
  UnionFloatLiteralGetParameters,
  UnionFloatLiteralPutParameters,
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
  DecimalGet200Response,
  DecimalPut204Response,
  Decimal128Get200Response,
  Decimal128Put204Response,
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
  UnknownStringGet200Response,
  UnknownStringPut204Response,
  UnknownIntGet200Response,
  UnknownIntPut204Response,
  UnknownDictGet200Response,
  UnknownDictPut204Response,
  UnknownArrayGet200Response,
  UnknownArrayPut204Response,
  StringLiteralGet200Response,
  StringLiteralPut204Response,
  IntLiteralGet200Response,
  IntLiteralPut204Response,
  FloatLiteralGet200Response,
  FloatLiteralPut204Response,
  BooleanLiteralGet200Response,
  BooleanLiteralPut204Response,
  UnionStringLiteralGet200Response,
  UnionStringLiteralPut204Response,
  UnionIntLiteralGet200Response,
  UnionIntLiteralPut204Response,
  UnionFloatLiteralGet200Response,
  UnionFloatLiteralPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BooleanModelGet {
  /** Get call */
  get(
    options?: BooleanModelGetParameters,
  ): StreamableMethod<BooleanModelGet200Response>;
  /** Put operation */
  put(
    options: BooleanModelPutParameters,
  ): StreamableMethod<BooleanModelPut204Response>;
}

export interface StringModelGet {
  /** Get call */
  get(
    options?: StringModelGetParameters,
  ): StreamableMethod<StringModelGet200Response>;
  /** Put operation */
  put(
    options: StringModelPutParameters,
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

export interface DecimalGet {
  /** Get call */
  get(options?: DecimalGetParameters): StreamableMethod<DecimalGet200Response>;
  /** Put operation */
  put(options: DecimalPutParameters): StreamableMethod<DecimalPut204Response>;
}

export interface Decimal128Get {
  /** Get call */
  get(
    options?: Decimal128GetParameters,
  ): StreamableMethod<Decimal128Get200Response>;
  /** Put operation */
  put(
    options: Decimal128PutParameters,
  ): StreamableMethod<Decimal128Put204Response>;
}

export interface DatetimeGet {
  /** Get call */
  get(
    options?: DatetimeGetParameters,
  ): StreamableMethod<DatetimeGet200Response>;
  /** Put operation */
  put(options: DatetimePutParameters): StreamableMethod<DatetimePut204Response>;
}

export interface DurationGet {
  /** Get call */
  get(
    options?: DurationGetParameters,
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
    options?: ExtensibleEnumGetParameters,
  ): StreamableMethod<ExtensibleEnumGet200Response>;
  /** Put operation */
  put(
    options: ExtensibleEnumPutParameters,
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
    options?: CollectionsStringGetParameters,
  ): StreamableMethod<CollectionsStringGet200Response>;
  /** Put operation */
  put(
    options: CollectionsStringPutParameters,
  ): StreamableMethod<CollectionsStringPut204Response>;
}

export interface CollectionsIntGet {
  /** Get call */
  get(
    options?: CollectionsIntGetParameters,
  ): StreamableMethod<CollectionsIntGet200Response>;
  /** Put operation */
  put(
    options: CollectionsIntPutParameters,
  ): StreamableMethod<CollectionsIntPut204Response>;
}

export interface CollectionsModelGet {
  /** Get call */
  get(
    options?: CollectionsModelGetParameters,
  ): StreamableMethod<CollectionsModelGet200Response>;
  /** Put operation */
  put(
    options: CollectionsModelPutParameters,
  ): StreamableMethod<CollectionsModelPut204Response>;
}

export interface DictionaryStringGet {
  /** Get call */
  get(
    options?: DictionaryStringGetParameters,
  ): StreamableMethod<DictionaryStringGet200Response>;
  /** Put operation */
  put(
    options: DictionaryStringPutParameters,
  ): StreamableMethod<DictionaryStringPut204Response>;
}

export interface NeverGet {
  /** Get call */
  get(options?: NeverGetParameters): StreamableMethod<NeverGet200Response>;
  /** Put operation */
  put(options: NeverPutParameters): StreamableMethod<NeverPut204Response>;
}

export interface UnknownStringGet {
  /** Get call */
  get(
    options?: UnknownStringGetParameters,
  ): StreamableMethod<UnknownStringGet200Response>;
  /** Put operation */
  put(
    options: UnknownStringPutParameters,
  ): StreamableMethod<UnknownStringPut204Response>;
}

export interface UnknownIntGet {
  /** Get call */
  get(
    options?: UnknownIntGetParameters,
  ): StreamableMethod<UnknownIntGet200Response>;
  /** Put operation */
  put(
    options: UnknownIntPutParameters,
  ): StreamableMethod<UnknownIntPut204Response>;
}

export interface UnknownDictGet {
  /** Get call */
  get(
    options?: UnknownDictGetParameters,
  ): StreamableMethod<UnknownDictGet200Response>;
  /** Put operation */
  put(
    options: UnknownDictPutParameters,
  ): StreamableMethod<UnknownDictPut204Response>;
}

export interface UnknownArrayGet {
  /** Get call */
  get(
    options?: UnknownArrayGetParameters,
  ): StreamableMethod<UnknownArrayGet200Response>;
  /** Put operation */
  put(
    options: UnknownArrayPutParameters,
  ): StreamableMethod<UnknownArrayPut204Response>;
}

export interface StringLiteralGet {
  /** Get call */
  get(
    options?: StringLiteralGetParameters,
  ): StreamableMethod<StringLiteralGet200Response>;
  /** Put operation */
  put(
    options: StringLiteralPutParameters,
  ): StreamableMethod<StringLiteralPut204Response>;
}

export interface IntLiteralGet {
  /** Get call */
  get(
    options?: IntLiteralGetParameters,
  ): StreamableMethod<IntLiteralGet200Response>;
  /** Put operation */
  put(
    options: IntLiteralPutParameters,
  ): StreamableMethod<IntLiteralPut204Response>;
}

export interface FloatLiteralGet {
  /** Get call */
  get(
    options?: FloatLiteralGetParameters,
  ): StreamableMethod<FloatLiteralGet200Response>;
  /** Put operation */
  put(
    options: FloatLiteralPutParameters,
  ): StreamableMethod<FloatLiteralPut204Response>;
}

export interface BooleanLiteralGet {
  /** Get call */
  get(
    options?: BooleanLiteralGetParameters,
  ): StreamableMethod<BooleanLiteralGet200Response>;
  /** Put operation */
  put(
    options: BooleanLiteralPutParameters,
  ): StreamableMethod<BooleanLiteralPut204Response>;
}

export interface UnionStringLiteralGet {
  /** Get call */
  get(
    options?: UnionStringLiteralGetParameters,
  ): StreamableMethod<UnionStringLiteralGet200Response>;
  /** Put operation */
  put(
    options: UnionStringLiteralPutParameters,
  ): StreamableMethod<UnionStringLiteralPut204Response>;
}

export interface UnionIntLiteralGet {
  /** Get call */
  get(
    options?: UnionIntLiteralGetParameters,
  ): StreamableMethod<UnionIntLiteralGet200Response>;
  /** Put operation */
  put(
    options: UnionIntLiteralPutParameters,
  ): StreamableMethod<UnionIntLiteralPut204Response>;
}

export interface UnionFloatLiteralGet {
  /** Get call */
  get(
    options?: UnionFloatLiteralGetParameters,
  ): StreamableMethod<UnionFloatLiteralGet200Response>;
  /** Put operation */
  put(
    options: UnionFloatLiteralPutParameters,
  ): StreamableMethod<UnionFloatLiteralPut204Response>;
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
  /** Resource for '/type/property/value-types/decimal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/decimal"): DecimalGet;
  /** Resource for '/type/property/value-types/decimal128' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/decimal128"): Decimal128Get;
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
  /** Resource for '/type/property/value-types/string/literal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/string/literal"): StringLiteralGet;
  /** Resource for '/type/property/value-types/int/literal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/int/literal"): IntLiteralGet;
  /** Resource for '/type/property/value-types/float/literal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/float/literal"): FloatLiteralGet;
  /** Resource for '/type/property/value-types/boolean/literal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/boolean/literal"): BooleanLiteralGet;
  /** Resource for '/type/property/value-types/union/string/literal' has methods for the following verbs: get, put */
  (
    path: "/type/property/value-types/union/string/literal",
  ): UnionStringLiteralGet;
  /** Resource for '/type/property/value-types/union/int/literal' has methods for the following verbs: get, put */
  (path: "/type/property/value-types/union/int/literal"): UnionIntLiteralGet;
  /** Resource for '/type/property/value-types/union/float/literal' has methods for the following verbs: get, put */
  (
    path: "/type/property/value-types/union/float/literal",
  ): UnionFloatLiteralGet;
}

export type ValueTypesClient = Client & {
  path: Routes;
};
