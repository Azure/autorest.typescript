// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ExtendsUnknownGetParameters,
  ExtendsUnknownPutParameters,
  ExtendsUnknownDerivedGetParameters,
  ExtendsUnknownDerivedPutParameters,
  ExtendsUnknownDiscriminatedGetParameters,
  ExtendsUnknownDiscriminatedPutParameters,
  IsUnknownGetParameters,
  IsUnknownPutParameters,
  IsUnknownDerivedGetParameters,
  IsUnknownDerivedPutParameters,
  IsUnknownDiscriminatedGetParameters,
  IsUnknownDiscriminatedPutParameters,
  ExtendsStringGetParameters,
  ExtendsStringPutParameters,
  IsStringGetParameters,
  IsStringPutParameters,
  SpreadStringGetParameters,
  SpreadStringPutParameters,
  ExtendsFloatGetParameters,
  ExtendsFloatPutParameters,
  IsFloatGetParameters,
  IsFloatPutParameters,
  SpreadFloatGetParameters,
  SpreadFloatPutParameters,
  ExtendsModelGetParameters,
  ExtendsModelPutParameters,
  IsModelGetParameters,
  IsModelPutParameters,
  SpreadModelGetParameters,
  SpreadModelPutParameters,
  ExtendsModelArrayGetParameters,
  ExtendsModelArrayPutParameters,
  IsModelArrayGetParameters,
  IsModelArrayPutParameters,
  SpreadModelArrayGetParameters,
  SpreadModelArrayPutParameters,
  SpreadDifferentStringGetParameters,
  SpreadDifferentStringPutParameters,
  SpreadDifferentFloatGetParameters,
  SpreadDifferentFloatPutParameters,
  SpreadDifferentModelGetParameters,
  SpreadDifferentModelPutParameters,
  SpreadDifferentModelArrayGetParameters,
  SpreadDifferentModelArrayPutParameters,
  ExtendsDifferentSpreadStringGetParameters,
  ExtendsDifferentSpreadStringPutParameters,
  ExtendsDifferentSpreadFloatGetParameters,
  ExtendsDifferentSpreadFloatPutParameters,
  ExtendsDifferentSpreadModelGetParameters,
  ExtendsDifferentSpreadModelPutParameters,
  ExtendsDifferentSpreadModelArrayGetParameters,
  ExtendsDifferentSpreadModelArrayPutParameters,
  MultipleSpreadGetParameters,
  MultipleSpreadPutParameters,
  SpreadRecordUnionGetParameters,
  SpreadRecordUnionPutParameters,
  SpreadRecordDiscriminatedUnionGetParameters,
  SpreadRecordDiscriminatedUnionPutParameters,
  SpreadRecordNonDiscriminatedUnionGetParameters,
  SpreadRecordNonDiscriminatedUnionPutParameters,
  SpreadRecordNonDiscriminatedUnion2GetParameters,
  SpreadRecordNonDiscriminatedUnion2PutParameters,
  SpreadRecordNonDiscriminatedUnion3GetParameters,
  SpreadRecordNonDiscriminatedUnion3PutParameters,
} from "./parameters.js";
import {
  ExtendsUnknownGet200Response,
  ExtendsUnknownPut204Response,
  ExtendsUnknownDerivedGet200Response,
  ExtendsUnknownDerivedPut204Response,
  ExtendsUnknownDiscriminatedGet200Response,
  ExtendsUnknownDiscriminatedPut204Response,
  IsUnknownGet200Response,
  IsUnknownPut204Response,
  IsUnknownDerivedGet200Response,
  IsUnknownDerivedPut204Response,
  IsUnknownDiscriminatedGet200Response,
  IsUnknownDiscriminatedPut204Response,
  ExtendsStringGet200Response,
  ExtendsStringPut204Response,
  IsStringGet200Response,
  IsStringPut204Response,
  SpreadStringGet200Response,
  SpreadStringPut204Response,
  ExtendsFloatGet200Response,
  ExtendsFloatPut204Response,
  IsFloatGet200Response,
  IsFloatPut204Response,
  SpreadFloatGet200Response,
  SpreadFloatPut204Response,
  ExtendsModelGet200Response,
  ExtendsModelPut204Response,
  IsModelGet200Response,
  IsModelPut204Response,
  SpreadModelGet200Response,
  SpreadModelPut204Response,
  ExtendsModelArrayGet200Response,
  ExtendsModelArrayPut204Response,
  IsModelArrayGet200Response,
  IsModelArrayPut204Response,
  SpreadModelArrayGet200Response,
  SpreadModelArrayPut204Response,
  SpreadDifferentStringGet200Response,
  SpreadDifferentStringPut204Response,
  SpreadDifferentFloatGet200Response,
  SpreadDifferentFloatPut204Response,
  SpreadDifferentModelGet200Response,
  SpreadDifferentModelPut204Response,
  SpreadDifferentModelArrayGet200Response,
  SpreadDifferentModelArrayPut204Response,
  ExtendsDifferentSpreadStringGet200Response,
  ExtendsDifferentSpreadStringPut204Response,
  ExtendsDifferentSpreadFloatGet200Response,
  ExtendsDifferentSpreadFloatPut204Response,
  ExtendsDifferentSpreadModelGet200Response,
  ExtendsDifferentSpreadModelPut204Response,
  ExtendsDifferentSpreadModelArrayGet200Response,
  ExtendsDifferentSpreadModelArrayPut204Response,
  MultipleSpreadGet200Response,
  MultipleSpreadPut204Response,
  SpreadRecordUnionGet200Response,
  SpreadRecordUnionPut204Response,
  SpreadRecordDiscriminatedUnionGet200Response,
  SpreadRecordDiscriminatedUnionPut204Response,
  SpreadRecordNonDiscriminatedUnionGet200Response,
  SpreadRecordNonDiscriminatedUnionPut204Response,
  SpreadRecordNonDiscriminatedUnion2Get200Response,
  SpreadRecordNonDiscriminatedUnion2Put204Response,
  SpreadRecordNonDiscriminatedUnion3Get200Response,
  SpreadRecordNonDiscriminatedUnion3Put204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExtendsUnknownGet {
  /** Get call */
  get(
    options: ExtendsUnknownGetParameters,
  ): StreamableMethod<ExtendsUnknownGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownPutParameters,
  ): StreamableMethod<ExtendsUnknownPut204Response>;
}

export interface ExtendsUnknownDerivedGet {
  /** Get call */
  get(
    options: ExtendsUnknownDerivedGetParameters,
  ): StreamableMethod<ExtendsUnknownDerivedGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownDerivedPutParameters,
  ): StreamableMethod<ExtendsUnknownDerivedPut204Response>;
}

export interface ExtendsUnknownDiscriminatedGet {
  /** Get call */
  get(
    options: ExtendsUnknownDiscriminatedGetParameters,
  ): StreamableMethod<ExtendsUnknownDiscriminatedGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownDiscriminatedPutParameters,
  ): StreamableMethod<ExtendsUnknownDiscriminatedPut204Response>;
}

export interface IsUnknownGet {
  /** Get call */
  get(
    options: IsUnknownGetParameters,
  ): StreamableMethod<IsUnknownGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownPutParameters,
  ): StreamableMethod<IsUnknownPut204Response>;
}

export interface IsUnknownDerivedGet {
  /** Get call */
  get(
    options: IsUnknownDerivedGetParameters,
  ): StreamableMethod<IsUnknownDerivedGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownDerivedPutParameters,
  ): StreamableMethod<IsUnknownDerivedPut204Response>;
}

export interface IsUnknownDiscriminatedGet {
  /** Get call */
  get(
    options: IsUnknownDiscriminatedGetParameters,
  ): StreamableMethod<IsUnknownDiscriminatedGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownDiscriminatedPutParameters,
  ): StreamableMethod<IsUnknownDiscriminatedPut204Response>;
}

export interface ExtendsStringGet {
  /** Get call */
  get(
    options: ExtendsStringGetParameters,
  ): StreamableMethod<ExtendsStringGet200Response>;
  /** Put operation */
  put(
    options: ExtendsStringPutParameters,
  ): StreamableMethod<ExtendsStringPut204Response>;
}

export interface IsStringGet {
  /** Get call */
  get(options: IsStringGetParameters): StreamableMethod<IsStringGet200Response>;
  /** Put operation */
  put(options: IsStringPutParameters): StreamableMethod<IsStringPut204Response>;
}

export interface SpreadStringGet {
  /** Get call */
  get(
    options: SpreadStringGetParameters,
  ): StreamableMethod<SpreadStringGet200Response>;
  /** Put operation */
  put(
    options: SpreadStringPutParameters,
  ): StreamableMethod<SpreadStringPut204Response>;
}

export interface ExtendsFloatGet {
  /** Get call */
  get(
    options: ExtendsFloatGetParameters,
  ): StreamableMethod<ExtendsFloatGet200Response>;
  /** Put operation */
  put(
    options: ExtendsFloatPutParameters,
  ): StreamableMethod<ExtendsFloatPut204Response>;
}

export interface IsFloatGet {
  /** Get call */
  get(options: IsFloatGetParameters): StreamableMethod<IsFloatGet200Response>;
  /** Put operation */
  put(options: IsFloatPutParameters): StreamableMethod<IsFloatPut204Response>;
}

export interface SpreadFloatGet {
  /** Get call */
  get(
    options: SpreadFloatGetParameters,
  ): StreamableMethod<SpreadFloatGet200Response>;
  /** Put operation */
  put(
    options: SpreadFloatPutParameters,
  ): StreamableMethod<SpreadFloatPut204Response>;
}

export interface ExtendsModelGet {
  /** Get call */
  get(
    options: ExtendsModelGetParameters,
  ): StreamableMethod<ExtendsModelGet200Response>;
  /** Put operation */
  put(
    options: ExtendsModelPutParameters,
  ): StreamableMethod<ExtendsModelPut204Response>;
}

export interface IsModelGet {
  /** Get call */
  get(options: IsModelGetParameters): StreamableMethod<IsModelGet200Response>;
  /** Put operation */
  put(options: IsModelPutParameters): StreamableMethod<IsModelPut204Response>;
}

export interface SpreadModelGet {
  /** Get call */
  get(
    options: SpreadModelGetParameters,
  ): StreamableMethod<SpreadModelGet200Response>;
  /** Put operation */
  put(
    options: SpreadModelPutParameters,
  ): StreamableMethod<SpreadModelPut204Response>;
}

export interface ExtendsModelArrayGet {
  /** Get call */
  get(
    options: ExtendsModelArrayGetParameters,
  ): StreamableMethod<ExtendsModelArrayGet200Response>;
  /** Put operation */
  put(
    options: ExtendsModelArrayPutParameters,
  ): StreamableMethod<ExtendsModelArrayPut204Response>;
}

export interface IsModelArrayGet {
  /** Get call */
  get(
    options: IsModelArrayGetParameters,
  ): StreamableMethod<IsModelArrayGet200Response>;
  /** Put operation */
  put(
    options: IsModelArrayPutParameters,
  ): StreamableMethod<IsModelArrayPut204Response>;
}

export interface SpreadModelArrayGet {
  /** Get call */
  get(
    options: SpreadModelArrayGetParameters,
  ): StreamableMethod<SpreadModelArrayGet200Response>;
  /** Put operation */
  put(
    options: SpreadModelArrayPutParameters,
  ): StreamableMethod<SpreadModelArrayPut204Response>;
}

export interface SpreadDifferentStringGet {
  /** Get call */
  get(
    options: SpreadDifferentStringGetParameters,
  ): StreamableMethod<SpreadDifferentStringGet200Response>;
  /** Put operation */
  put(
    options: SpreadDifferentStringPutParameters,
  ): StreamableMethod<SpreadDifferentStringPut204Response>;
}

export interface SpreadDifferentFloatGet {
  /** Get call */
  get(
    options: SpreadDifferentFloatGetParameters,
  ): StreamableMethod<SpreadDifferentFloatGet200Response>;
  /** Put operation */
  put(
    options: SpreadDifferentFloatPutParameters,
  ): StreamableMethod<SpreadDifferentFloatPut204Response>;
}

export interface SpreadDifferentModelGet {
  /** Get call */
  get(
    options: SpreadDifferentModelGetParameters,
  ): StreamableMethod<SpreadDifferentModelGet200Response>;
  /** Put operation */
  put(
    options: SpreadDifferentModelPutParameters,
  ): StreamableMethod<SpreadDifferentModelPut204Response>;
}

export interface SpreadDifferentModelArrayGet {
  /** Get call */
  get(
    options: SpreadDifferentModelArrayGetParameters,
  ): StreamableMethod<SpreadDifferentModelArrayGet200Response>;
  /** Put operation */
  put(
    options: SpreadDifferentModelArrayPutParameters,
  ): StreamableMethod<SpreadDifferentModelArrayPut204Response>;
}

export interface ExtendsDifferentSpreadStringGet {
  /** Get call */
  get(
    options: ExtendsDifferentSpreadStringGetParameters,
  ): StreamableMethod<ExtendsDifferentSpreadStringGet200Response>;
  /** Put operation */
  put(
    options: ExtendsDifferentSpreadStringPutParameters,
  ): StreamableMethod<ExtendsDifferentSpreadStringPut204Response>;
}

export interface ExtendsDifferentSpreadFloatGet {
  /** Get call */
  get(
    options: ExtendsDifferentSpreadFloatGetParameters,
  ): StreamableMethod<ExtendsDifferentSpreadFloatGet200Response>;
  /** Put operation */
  put(
    options: ExtendsDifferentSpreadFloatPutParameters,
  ): StreamableMethod<ExtendsDifferentSpreadFloatPut204Response>;
}

export interface ExtendsDifferentSpreadModelGet {
  /** Get call */
  get(
    options: ExtendsDifferentSpreadModelGetParameters,
  ): StreamableMethod<ExtendsDifferentSpreadModelGet200Response>;
  /** Put operation */
  put(
    options: ExtendsDifferentSpreadModelPutParameters,
  ): StreamableMethod<ExtendsDifferentSpreadModelPut204Response>;
}

export interface ExtendsDifferentSpreadModelArrayGet {
  /** Get call */
  get(
    options: ExtendsDifferentSpreadModelArrayGetParameters,
  ): StreamableMethod<ExtendsDifferentSpreadModelArrayGet200Response>;
  /** Put operation */
  put(
    options: ExtendsDifferentSpreadModelArrayPutParameters,
  ): StreamableMethod<ExtendsDifferentSpreadModelArrayPut204Response>;
}

export interface MultipleSpreadGet {
  /** Get call */
  get(
    options: MultipleSpreadGetParameters,
  ): StreamableMethod<MultipleSpreadGet200Response>;
  /** Put operation */
  put(
    options: MultipleSpreadPutParameters,
  ): StreamableMethod<MultipleSpreadPut204Response>;
}

export interface SpreadRecordUnionGet {
  /** Get call */
  get(
    options: SpreadRecordUnionGetParameters,
  ): StreamableMethod<SpreadRecordUnionGet200Response>;
  /** Put operation */
  put(
    options: SpreadRecordUnionPutParameters,
  ): StreamableMethod<SpreadRecordUnionPut204Response>;
}

export interface SpreadRecordDiscriminatedUnionGet {
  /** Get call */
  get(
    options: SpreadRecordDiscriminatedUnionGetParameters,
  ): StreamableMethod<SpreadRecordDiscriminatedUnionGet200Response>;
  /** Put operation */
  put(
    options: SpreadRecordDiscriminatedUnionPutParameters,
  ): StreamableMethod<SpreadRecordDiscriminatedUnionPut204Response>;
}

export interface SpreadRecordNonDiscriminatedUnionGet {
  /** Get call */
  get(
    options: SpreadRecordNonDiscriminatedUnionGetParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnionGet200Response>;
  /** Put operation */
  put(
    options: SpreadRecordNonDiscriminatedUnionPutParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnionPut204Response>;
}

export interface SpreadRecordNonDiscriminatedUnion2Get {
  /** Get call */
  get(
    options: SpreadRecordNonDiscriminatedUnion2GetParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Get200Response>;
  /** Put operation */
  put(
    options: SpreadRecordNonDiscriminatedUnion2PutParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Put204Response>;
}

export interface SpreadRecordNonDiscriminatedUnion3Get {
  /** Get call */
  get(
    options: SpreadRecordNonDiscriminatedUnion3GetParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Get200Response>;
  /** Put operation */
  put(
    options: SpreadRecordNonDiscriminatedUnion3PutParameters,
  ): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Put204Response>;
}

export interface Routes {
  /** Resource for '/type/property/additionalProperties/extendsRecordUnknown' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordUnknown",
  ): ExtendsUnknownGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordUnknownDerived' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordUnknownDerived",
  ): ExtendsUnknownDerivedGet;
  /** Resource for '/type/property/additionalProperties/extendsUnknownDiscriminated' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsUnknownDiscriminated",
  ): ExtendsUnknownDiscriminatedGet;
  /** Resource for '/type/property/additionalProperties/isRecordUnknown' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordUnknown"): IsUnknownGet;
  /** Resource for '/type/property/additionalProperties/isRecordUnknownDerived' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/isRecordUnknownDerived",
  ): IsUnknownDerivedGet;
  /** Resource for '/type/property/additionalProperties/isUnknownDiscriminated' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/isUnknownDiscriminated",
  ): IsUnknownDiscriminatedGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordString' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordString",
  ): ExtendsStringGet;
  /** Resource for '/type/property/additionalProperties/isRecordstring' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordstring"): IsStringGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordString' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordString",
  ): SpreadStringGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordFloat' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordFloat",
  ): ExtendsFloatGet;
  /** Resource for '/type/property/additionalProperties/isRecordFloat' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordFloat"): IsFloatGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordFloat' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordFloat",
  ): SpreadFloatGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordModel' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordModel",
  ): ExtendsModelGet;
  /** Resource for '/type/property/additionalProperties/isRecordModel' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordModel"): IsModelGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordModel' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordModel",
  ): SpreadModelGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordModelArray",
  ): ExtendsModelArrayGet;
  /** Resource for '/type/property/additionalProperties/isRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/isRecordModelArray",
  ): IsModelArrayGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordModelArray",
  ): SpreadModelArrayGet;
  /** Resource for '/type/property/additionalProperties/spreadDifferentRecordString' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadDifferentRecordString",
  ): SpreadDifferentStringGet;
  /** Resource for '/type/property/additionalProperties/spreadDifferentRecordFloat' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadDifferentRecordFloat",
  ): SpreadDifferentFloatGet;
  /** Resource for '/type/property/additionalProperties/spreadDifferentRecordModel' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadDifferentRecordModel",
  ): SpreadDifferentModelGet;
  /** Resource for '/type/property/additionalProperties/spreadDifferentRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadDifferentRecordModelArray",
  ): SpreadDifferentModelArrayGet;
  /** Resource for '/type/property/additionalProperties/extendsDifferentSpreadString' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsDifferentSpreadString",
  ): ExtendsDifferentSpreadStringGet;
  /** Resource for '/type/property/additionalProperties/extendsDifferentSpreadFloat' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsDifferentSpreadFloat",
  ): ExtendsDifferentSpreadFloatGet;
  /** Resource for '/type/property/additionalProperties/extendsDifferentSpreadModel' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsDifferentSpreadModel",
  ): ExtendsDifferentSpreadModelGet;
  /** Resource for '/type/property/additionalProperties/extendsDifferentSpreadModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsDifferentSpreadModelArray",
  ): ExtendsDifferentSpreadModelArrayGet;
  /** Resource for '/type/property/additionalProperties/multipleSpreadRecord' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/multipleSpreadRecord",
  ): MultipleSpreadGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordUnion' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordUnion",
  ): SpreadRecordUnionGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordDiscriminatedUnion' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordDiscriminatedUnion",
  ): SpreadRecordDiscriminatedUnionGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion",
  ): SpreadRecordNonDiscriminatedUnionGet;
  /** Resource for '/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2",
  ): SpreadRecordNonDiscriminatedUnion2Get;
  /** Resource for '/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3",
  ): SpreadRecordNonDiscriminatedUnion3Get;
}

export type AdditionalPropertiesClient = Client & {
  path: Routes;
};
