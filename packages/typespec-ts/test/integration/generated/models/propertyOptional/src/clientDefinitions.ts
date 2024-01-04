// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetAllParameters,
  StringModelPutAllParameters,
  StringModelGetDefaultParameters,
  StringModelPutDefaultParameters,
  BytesGetAllParameters,
  BytesPutAllParameters,
  BytesGetDefaultParameters,
  BytesPutDefaultParameters,
  DatetimeGetAllParameters,
  DatetimePutAllParameters,
  DatetimeGetDefaultParameters,
  DatetimePutDefaultParameters,
  DurationGetAllParameters,
  DurationPutAllParameters,
  DurationGetDefaultParameters,
  DurationPutDefaultParameters,
  CollectionsByteGetAllParameters,
  CollectionsBytePutAllParameters,
  CollectionsByteGetDefaultParameters,
  CollectionsBytePutDefaultParameters,
  CollectionsModelGetAllParameters,
  CollectionsModelPutAllParameters,
  CollectionsModelGetDefaultParameters,
  CollectionsModelPutDefaultParameters,
  StringLiteralGetAllParameters,
  StringLiteralPutAllParameters,
  StringLiteralGetDefaultParameters,
  StringLiteralPutDefaultParameters,
  IntLiteralGetAllParameters,
  IntLiteralPutAllParameters,
  IntLiteralGetDefaultParameters,
  IntLiteralPutDefaultParameters,
  FloatLiteralGetAllParameters,
  FloatLiteralPutAllParameters,
  FloatLiteralGetDefaultParameters,
  FloatLiteralPutDefaultParameters,
  BooleanLiteralGetAllParameters,
  BooleanLiteralPutAllParameters,
  BooleanLiteralGetDefaultParameters,
  BooleanLiteralPutDefaultParameters,
  UnionStringLiteralGetAllParameters,
  UnionStringLiteralPutAllParameters,
  UnionStringLiteralGetDefaultParameters,
  UnionStringLiteralPutDefaultParameters,
  UnionIntLiteralGetAllParameters,
  UnionIntLiteralPutAllParameters,
  UnionIntLiteralGetDefaultParameters,
  UnionIntLiteralPutDefaultParameters,
  UnionFloatLiteralGetAllParameters,
  UnionFloatLiteralPutAllParameters,
  UnionFloatLiteralGetDefaultParameters,
  UnionFloatLiteralPutDefaultParameters,
  RequiredAndOptionalGetAllParameters,
  RequiredAndOptionalPutAllParameters,
  RequiredAndOptionalGetRequiredOnlyParameters,
  RequiredAndOptionalPutRequiredOnlyParameters,
} from "./parameters";
import {
  StringModelGetAll200Response,
  StringModelPutAll204Response,
  StringModelGetDefault200Response,
  StringModelPutDefault204Response,
  BytesGetAll200Response,
  BytesPutAll204Response,
  BytesGetDefault200Response,
  BytesPutDefault204Response,
  DatetimeGetAll200Response,
  DatetimePutAll204Response,
  DatetimeGetDefault200Response,
  DatetimePutDefault204Response,
  DurationGetAll200Response,
  DurationPutAll204Response,
  DurationGetDefault200Response,
  DurationPutDefault204Response,
  CollectionsByteGetAll200Response,
  CollectionsBytePutAll204Response,
  CollectionsByteGetDefault200Response,
  CollectionsBytePutDefault204Response,
  CollectionsModelGetAll200Response,
  CollectionsModelPutAll204Response,
  CollectionsModelGetDefault200Response,
  CollectionsModelPutDefault204Response,
  StringLiteralGetAll200Response,
  StringLiteralPutAll204Response,
  StringLiteralGetDefault200Response,
  StringLiteralPutDefault204Response,
  IntLiteralGetAll200Response,
  IntLiteralPutAll204Response,
  IntLiteralGetDefault200Response,
  IntLiteralPutDefault204Response,
  FloatLiteralGetAll200Response,
  FloatLiteralPutAll204Response,
  FloatLiteralGetDefault200Response,
  FloatLiteralPutDefault204Response,
  BooleanLiteralGetAll200Response,
  BooleanLiteralPutAll204Response,
  BooleanLiteralGetDefault200Response,
  BooleanLiteralPutDefault204Response,
  UnionStringLiteralGetAll200Response,
  UnionStringLiteralPutAll204Response,
  UnionStringLiteralGetDefault200Response,
  UnionStringLiteralPutDefault204Response,
  UnionIntLiteralGetAll200Response,
  UnionIntLiteralPutAll204Response,
  UnionIntLiteralGetDefault200Response,
  UnionIntLiteralPutDefault204Response,
  UnionFloatLiteralGetAll200Response,
  UnionFloatLiteralPutAll204Response,
  UnionFloatLiteralGetDefault200Response,
  UnionFloatLiteralPutDefault204Response,
  RequiredAndOptionalGetAll200Response,
  RequiredAndOptionalPutAll204Response,
  RequiredAndOptionalGetRequiredOnly200Response,
  RequiredAndOptionalPutRequiredOnly204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: StringModelGetAllParameters,
  ): StreamableMethod<StringModelGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: StringModelPutAllParameters,
  ): StreamableMethod<StringModelPutAll204Response>;
}

export interface StringModelGetDefault {
  /** Get models that will return the default object */
  get(
    options?: StringModelGetDefaultParameters,
  ): StreamableMethod<StringModelGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: StringModelPutDefaultParameters,
  ): StreamableMethod<StringModelPutDefault204Response>;
}

export interface BytesGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: BytesGetAllParameters,
  ): StreamableMethod<BytesGetAll200Response>;
  /** Put a body with all properties present. */
  put(options: BytesPutAllParameters): StreamableMethod<BytesPutAll204Response>;
}

export interface BytesGetDefault {
  /** Get models that will return the default object */
  get(
    options?: BytesGetDefaultParameters,
  ): StreamableMethod<BytesGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: BytesPutDefaultParameters,
  ): StreamableMethod<BytesPutDefault204Response>;
}

export interface DatetimeGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DatetimeGetAllParameters,
  ): StreamableMethod<DatetimeGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: DatetimePutAllParameters,
  ): StreamableMethod<DatetimePutAll204Response>;
}

export interface DatetimeGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DatetimeGetDefaultParameters,
  ): StreamableMethod<DatetimeGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: DatetimePutDefaultParameters,
  ): StreamableMethod<DatetimePutDefault204Response>;
}

export interface DurationGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DurationGetAllParameters,
  ): StreamableMethod<DurationGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: DurationPutAllParameters,
  ): StreamableMethod<DurationPutAll204Response>;
}

export interface DurationGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DurationGetDefaultParameters,
  ): StreamableMethod<DurationGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: DurationPutDefaultParameters,
  ): StreamableMethod<DurationPutDefault204Response>;
}

export interface CollectionsByteGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsByteGetAllParameters,
  ): StreamableMethod<CollectionsByteGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: CollectionsBytePutAllParameters,
  ): StreamableMethod<CollectionsBytePutAll204Response>;
}

export interface CollectionsByteGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsByteGetDefaultParameters,
  ): StreamableMethod<CollectionsByteGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: CollectionsBytePutDefaultParameters,
  ): StreamableMethod<CollectionsBytePutDefault204Response>;
}

export interface CollectionsModelGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsModelGetAllParameters,
  ): StreamableMethod<CollectionsModelGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: CollectionsModelPutAllParameters,
  ): StreamableMethod<CollectionsModelPutAll204Response>;
}

export interface CollectionsModelGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsModelGetDefaultParameters,
  ): StreamableMethod<CollectionsModelGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: CollectionsModelPutDefaultParameters,
  ): StreamableMethod<CollectionsModelPutDefault204Response>;
}

export interface StringLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: StringLiteralGetAllParameters,
  ): StreamableMethod<StringLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: StringLiteralPutAllParameters,
  ): StreamableMethod<StringLiteralPutAll204Response>;
}

export interface StringLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: StringLiteralGetDefaultParameters,
  ): StreamableMethod<StringLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: StringLiteralPutDefaultParameters,
  ): StreamableMethod<StringLiteralPutDefault204Response>;
}

export interface IntLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: IntLiteralGetAllParameters,
  ): StreamableMethod<IntLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: IntLiteralPutAllParameters,
  ): StreamableMethod<IntLiteralPutAll204Response>;
}

export interface IntLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: IntLiteralGetDefaultParameters,
  ): StreamableMethod<IntLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: IntLiteralPutDefaultParameters,
  ): StreamableMethod<IntLiteralPutDefault204Response>;
}

export interface FloatLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: FloatLiteralGetAllParameters,
  ): StreamableMethod<FloatLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: FloatLiteralPutAllParameters,
  ): StreamableMethod<FloatLiteralPutAll204Response>;
}

export interface FloatLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: FloatLiteralGetDefaultParameters,
  ): StreamableMethod<FloatLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: FloatLiteralPutDefaultParameters,
  ): StreamableMethod<FloatLiteralPutDefault204Response>;
}

export interface BooleanLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: BooleanLiteralGetAllParameters,
  ): StreamableMethod<BooleanLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: BooleanLiteralPutAllParameters,
  ): StreamableMethod<BooleanLiteralPutAll204Response>;
}

export interface BooleanLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: BooleanLiteralGetDefaultParameters,
  ): StreamableMethod<BooleanLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: BooleanLiteralPutDefaultParameters,
  ): StreamableMethod<BooleanLiteralPutDefault204Response>;
}

export interface UnionStringLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: UnionStringLiteralGetAllParameters,
  ): StreamableMethod<UnionStringLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: UnionStringLiteralPutAllParameters,
  ): StreamableMethod<UnionStringLiteralPutAll204Response>;
}

export interface UnionStringLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: UnionStringLiteralGetDefaultParameters,
  ): StreamableMethod<UnionStringLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: UnionStringLiteralPutDefaultParameters,
  ): StreamableMethod<UnionStringLiteralPutDefault204Response>;
}

export interface UnionIntLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: UnionIntLiteralGetAllParameters,
  ): StreamableMethod<UnionIntLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: UnionIntLiteralPutAllParameters,
  ): StreamableMethod<UnionIntLiteralPutAll204Response>;
}

export interface UnionIntLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: UnionIntLiteralGetDefaultParameters,
  ): StreamableMethod<UnionIntLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: UnionIntLiteralPutDefaultParameters,
  ): StreamableMethod<UnionIntLiteralPutDefault204Response>;
}

export interface UnionFloatLiteralGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: UnionFloatLiteralGetAllParameters,
  ): StreamableMethod<UnionFloatLiteralGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: UnionFloatLiteralPutAllParameters,
  ): StreamableMethod<UnionFloatLiteralPutAll204Response>;
}

export interface UnionFloatLiteralGetDefault {
  /** Get models that will return the default object */
  get(
    options?: UnionFloatLiteralGetDefaultParameters,
  ): StreamableMethod<UnionFloatLiteralGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: UnionFloatLiteralPutDefaultParameters,
  ): StreamableMethod<UnionFloatLiteralPutDefault204Response>;
}

export interface RequiredAndOptionalGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: RequiredAndOptionalGetAllParameters,
  ): StreamableMethod<RequiredAndOptionalGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: RequiredAndOptionalPutAllParameters,
  ): StreamableMethod<RequiredAndOptionalPutAll204Response>;
}

export interface RequiredAndOptionalGetRequiredOnly {
  /** Get models that will return only the required properties */
  get(
    options?: RequiredAndOptionalGetRequiredOnlyParameters,
  ): StreamableMethod<RequiredAndOptionalGetRequiredOnly200Response>;
  /** Put a body with only required properties. */
  put(
    options: RequiredAndOptionalPutRequiredOnlyParameters,
  ): StreamableMethod<RequiredAndOptionalPutRequiredOnly204Response>;
}

export interface Routes {
  /** Resource for '/type/property/optional/string/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/string/all"): StringModelGetAll;
  /** Resource for '/type/property/optional/string/default' has methods for the following verbs: get, put */
  (path: "/type/property/optional/string/default"): StringModelGetDefault;
  /** Resource for '/type/property/optional/bytes/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/bytes/all"): BytesGetAll;
  /** Resource for '/type/property/optional/bytes/default' has methods for the following verbs: get, put */
  (path: "/type/property/optional/bytes/default"): BytesGetDefault;
  /** Resource for '/type/property/optional/datetime/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/datetime/all"): DatetimeGetAll;
  /** Resource for '/type/property/optional/datetime/default' has methods for the following verbs: get, put */
  (path: "/type/property/optional/datetime/default"): DatetimeGetDefault;
  /** Resource for '/type/property/optional/duration/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/duration/all"): DurationGetAll;
  /** Resource for '/type/property/optional/duration/default' has methods for the following verbs: get, put */
  (path: "/type/property/optional/duration/default"): DurationGetDefault;
  /** Resource for '/type/property/optional/collections/bytes/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/bytes/all",
  ): CollectionsByteGetAll;
  /** Resource for '/type/property/optional/collections/bytes/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/bytes/default",
  ): CollectionsByteGetDefault;
  /** Resource for '/type/property/optional/collections/model/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/model/all",
  ): CollectionsModelGetAll;
  /** Resource for '/type/property/optional/collections/model/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/model/default",
  ): CollectionsModelGetDefault;
  /** Resource for '/type/property/optional/string/literal/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/string/literal/all"): StringLiteralGetAll;
  /** Resource for '/type/property/optional/string/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/string/literal/default",
  ): StringLiteralGetDefault;
  /** Resource for '/type/property/optional/int/literal/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/int/literal/all"): IntLiteralGetAll;
  /** Resource for '/type/property/optional/int/literal/default' has methods for the following verbs: get, put */
  (path: "/type/property/optional/int/literal/default"): IntLiteralGetDefault;
  /** Resource for '/type/property/optional/float/literal/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/float/literal/all"): FloatLiteralGetAll;
  /** Resource for '/type/property/optional/float/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/float/literal/default",
  ): FloatLiteralGetDefault;
  /** Resource for '/type/property/optional/boolean/literal/all' has methods for the following verbs: get, put */
  (path: "/type/property/optional/boolean/literal/all"): BooleanLiteralGetAll;
  /** Resource for '/type/property/optional/boolean/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/boolean/literal/default",
  ): BooleanLiteralGetDefault;
  /** Resource for '/type/property/optional/union/string/literal/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/string/literal/all",
  ): UnionStringLiteralGetAll;
  /** Resource for '/type/property/optional/union/string/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/string/literal/default",
  ): UnionStringLiteralGetDefault;
  /** Resource for '/type/property/optional/union/int/literal/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/int/literal/all",
  ): UnionIntLiteralGetAll;
  /** Resource for '/type/property/optional/union/int/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/int/literal/default",
  ): UnionIntLiteralGetDefault;
  /** Resource for '/type/property/optional/union/float/literal/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/float/literal/all",
  ): UnionFloatLiteralGetAll;
  /** Resource for '/type/property/optional/union/float/literal/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/union/float/literal/default",
  ): UnionFloatLiteralGetDefault;
  /** Resource for '/type/property/optional/requiredAndOptional/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/requiredAndOptional/all",
  ): RequiredAndOptionalGetAll;
  /** Resource for '/type/property/optional/requiredAndOptional/requiredOnly' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/requiredAndOptional/requiredOnly",
  ): RequiredAndOptionalGetRequiredOnly;
}

export type OptionalClient = Client & {
  path: Routes;
};
