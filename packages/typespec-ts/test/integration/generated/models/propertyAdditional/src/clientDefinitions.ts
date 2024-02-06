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
  ExtendsFloatGetParameters,
  ExtendsFloatPutParameters,
  IsFloatGetParameters,
  IsFloatPutParameters,
  ExtendsModelGetParameters,
  ExtendsModelPutParameters,
  IsModelGetParameters,
  IsModelPutParameters,
  ExtendsModelArrayGetParameters,
  ExtendsModelArrayPutParameters,
  IsModelArrayGetParameters,
  IsModelArrayPutParameters,
} from "./parameters";
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
  ExtendsFloatGet200Response,
  ExtendsFloatPut204Response,
  IsFloatGet200Response,
  IsFloatPut204Response,
  ExtendsModelGet200Response,
  ExtendsModelPut204Response,
  IsModelGet200Response,
  IsModelPut204Response,
  ExtendsModelArrayGet200Response,
  ExtendsModelArrayPut204Response,
  IsModelArrayGet200Response,
  IsModelArrayPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExtendsUnknownGet {
  /** Get call */
  get(
    options?: ExtendsUnknownGetParameters,
  ): StreamableMethod<ExtendsUnknownGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownPutParameters,
  ): StreamableMethod<ExtendsUnknownPut204Response>;
}

export interface ExtendsUnknownDerivedGet {
  /** Get call */
  get(
    options?: ExtendsUnknownDerivedGetParameters,
  ): StreamableMethod<ExtendsUnknownDerivedGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownDerivedPutParameters,
  ): StreamableMethod<ExtendsUnknownDerivedPut204Response>;
}

export interface ExtendsUnknownDiscriminatedGet {
  /** Get call */
  get(
    options?: ExtendsUnknownDiscriminatedGetParameters,
  ): StreamableMethod<ExtendsUnknownDiscriminatedGet200Response>;
  /** Put operation */
  put(
    options: ExtendsUnknownDiscriminatedPutParameters,
  ): StreamableMethod<ExtendsUnknownDiscriminatedPut204Response>;
}

export interface IsUnknownGet {
  /** Get call */
  get(
    options?: IsUnknownGetParameters,
  ): StreamableMethod<IsUnknownGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownPutParameters,
  ): StreamableMethod<IsUnknownPut204Response>;
}

export interface IsUnknownDerivedGet {
  /** Get call */
  get(
    options?: IsUnknownDerivedGetParameters,
  ): StreamableMethod<IsUnknownDerivedGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownDerivedPutParameters,
  ): StreamableMethod<IsUnknownDerivedPut204Response>;
}

export interface IsUnknownDiscriminatedGet {
  /** Get call */
  get(
    options?: IsUnknownDiscriminatedGetParameters,
  ): StreamableMethod<IsUnknownDiscriminatedGet200Response>;
  /** Put operation */
  put(
    options: IsUnknownDiscriminatedPutParameters,
  ): StreamableMethod<IsUnknownDiscriminatedPut204Response>;
}

export interface ExtendsStringGet {
  /** Get call */
  get(
    options?: ExtendsStringGetParameters,
  ): StreamableMethod<ExtendsStringGet200Response>;
  /** Put operation */
  put(
    options: ExtendsStringPutParameters,
  ): StreamableMethod<ExtendsStringPut204Response>;
}

export interface IsStringGet {
  /** Get call */
  get(
    options?: IsStringGetParameters,
  ): StreamableMethod<IsStringGet200Response>;
  /** Put operation */
  put(options: IsStringPutParameters): StreamableMethod<IsStringPut204Response>;
}

export interface ExtendsFloatGet {
  /** Get call */
  get(
    options?: ExtendsFloatGetParameters,
  ): StreamableMethod<ExtendsFloatGet200Response>;
  /** Put operation */
  put(
    options: ExtendsFloatPutParameters,
  ): StreamableMethod<ExtendsFloatPut204Response>;
}

export interface IsFloatGet {
  /** Get call */
  get(options?: IsFloatGetParameters): StreamableMethod<IsFloatGet200Response>;
  /** Put operation */
  put(options: IsFloatPutParameters): StreamableMethod<IsFloatPut204Response>;
}

export interface ExtendsModelGet {
  /** Get call */
  get(
    options?: ExtendsModelGetParameters,
  ): StreamableMethod<ExtendsModelGet200Response>;
  /** Put operation */
  put(
    options: ExtendsModelPutParameters,
  ): StreamableMethod<ExtendsModelPut204Response>;
}

export interface IsModelGet {
  /** Get call */
  get(options?: IsModelGetParameters): StreamableMethod<IsModelGet200Response>;
  /** Put operation */
  put(options: IsModelPutParameters): StreamableMethod<IsModelPut204Response>;
}

export interface ExtendsModelArrayGet {
  /** Get call */
  get(
    options?: ExtendsModelArrayGetParameters,
  ): StreamableMethod<ExtendsModelArrayGet200Response>;
  /** Put operation */
  put(
    options: ExtendsModelArrayPutParameters,
  ): StreamableMethod<ExtendsModelArrayPut204Response>;
}

export interface IsModelArrayGet {
  /** Get call */
  get(
    options?: IsModelArrayGetParameters,
  ): StreamableMethod<IsModelArrayGet200Response>;
  /** Put operation */
  put(
    options: IsModelArrayPutParameters,
  ): StreamableMethod<IsModelArrayPut204Response>;
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
  /** Resource for '/type/property/additionalProperties/extendsRecordFloat' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordFloat",
  ): ExtendsFloatGet;
  /** Resource for '/type/property/additionalProperties/isRecordFloat' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordFloat"): IsFloatGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordModel' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordModel",
  ): ExtendsModelGet;
  /** Resource for '/type/property/additionalProperties/isRecordModel' has methods for the following verbs: get, put */
  (path: "/type/property/additionalProperties/isRecordModel"): IsModelGet;
  /** Resource for '/type/property/additionalProperties/extendsRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/extendsRecordModelArray",
  ): ExtendsModelArrayGet;
  /** Resource for '/type/property/additionalProperties/isRecordModelArray' has methods for the following verbs: get, put */
  (
    path: "/type/property/additionalProperties/isRecordModelArray",
  ): IsModelArrayGet;
}

export type AdditionalPropertiesClient = Client & {
  path: Routes;
};
