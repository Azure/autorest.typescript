// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetNonNullParameters,
  StringModelPatchNonNullParameters,
  StringModelGetNullParameters,
  StringModelPatchNullParameters,
  BytesGetNonNullParameters,
  BytesPatchNonNullParameters,
  BytesGetNullParameters,
  BytesPatchNullParameters,
  DatetimeGetNonNullParameters,
  DatetimePatchNonNullParameters,
  DatetimeGetNullParameters,
  DatetimePatchNullParameters,
  DurationGetNonNullParameters,
  DurationPatchNonNullParameters,
  DurationGetNullParameters,
  DurationPatchNullParameters,
  CollectionsByteGetNonNullParameters,
  CollectionsBytePatchNonNullParameters,
  CollectionsByteGetNullParameters,
  CollectionsBytePatchNullParameters,
  CollectionsModelGetNonNullParameters,
  CollectionsModelPatchNonNullParameters,
  CollectionsModelGetNullParameters,
  CollectionsModelPatchNullParameters,
} from "./parameters";
import {
  StringModelGetNonNull200Response,
  StringModelGetNonNullDefaultResponse,
  StringModelPatchNonNull204Response,
  StringModelPatchNonNullDefaultResponse,
  StringModelGetNull200Response,
  StringModelGetNullDefaultResponse,
  StringModelPatchNull204Response,
  StringModelPatchNullDefaultResponse,
  BytesGetNonNull200Response,
  BytesGetNonNullDefaultResponse,
  BytesPatchNonNull204Response,
  BytesPatchNonNullDefaultResponse,
  BytesGetNull200Response,
  BytesGetNullDefaultResponse,
  BytesPatchNull204Response,
  BytesPatchNullDefaultResponse,
  DatetimeGetNonNull200Response,
  DatetimeGetNonNullDefaultResponse,
  DatetimePatchNonNull204Response,
  DatetimePatchNonNullDefaultResponse,
  DatetimeGetNull200Response,
  DatetimeGetNullDefaultResponse,
  DatetimePatchNull204Response,
  DatetimePatchNullDefaultResponse,
  DurationGetNonNull200Response,
  DurationGetNonNullDefaultResponse,
  DurationPatchNonNull204Response,
  DurationPatchNonNullDefaultResponse,
  DurationGetNull200Response,
  DurationGetNullDefaultResponse,
  DurationPatchNull204Response,
  DurationPatchNullDefaultResponse,
  CollectionsByteGetNonNull200Response,
  CollectionsByteGetNonNullDefaultResponse,
  CollectionsBytePatchNonNull204Response,
  CollectionsBytePatchNonNullDefaultResponse,
  CollectionsByteGetNull200Response,
  CollectionsByteGetNullDefaultResponse,
  CollectionsBytePatchNull204Response,
  CollectionsBytePatchNullDefaultResponse,
  CollectionsModelGetNonNull200Response,
  CollectionsModelGetNonNullDefaultResponse,
  CollectionsModelPatchNonNull204Response,
  CollectionsModelPatchNonNullDefaultResponse,
  CollectionsModelGetNull200Response,
  CollectionsModelGetNullDefaultResponse,
  CollectionsModelPatchNull204Response,
  CollectionsModelPatchNullDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: StringModelGetNonNullParameters
  ): StreamableMethod<
    StringModelGetNonNull200Response | StringModelGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: StringModelPatchNonNullParameters
  ): StreamableMethod<
    StringModelPatchNonNull204Response | StringModelPatchNonNullDefaultResponse
  >;
}

export interface StringModelGetNull {
  /** Get models that will return the default object */
  get(
    options?: StringModelGetNullParameters
  ): StreamableMethod<
    StringModelGetNull200Response | StringModelGetNullDefaultResponse
  >;
  /** Put a body with default properties. */
  patch(
    options: StringModelPatchNullParameters
  ): StreamableMethod<
    StringModelPatchNull204Response | StringModelPatchNullDefaultResponse
  >;
}

export interface BytesGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: BytesGetNonNullParameters
  ): StreamableMethod<
    BytesGetNonNull200Response | BytesGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: BytesPatchNonNullParameters
  ): StreamableMethod<
    BytesPatchNonNull204Response | BytesPatchNonNullDefaultResponse
  >;
}

export interface BytesGetNull {
  /** Get models that will return the default object */
  get(
    options?: BytesGetNullParameters
  ): StreamableMethod<BytesGetNull200Response | BytesGetNullDefaultResponse>;
  /** Put a body with default properties. */
  patch(
    options: BytesPatchNullParameters
  ): StreamableMethod<
    BytesPatchNull204Response | BytesPatchNullDefaultResponse
  >;
}

export interface DatetimeGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: DatetimeGetNonNullParameters
  ): StreamableMethod<
    DatetimeGetNonNull200Response | DatetimeGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: DatetimePatchNonNullParameters
  ): StreamableMethod<
    DatetimePatchNonNull204Response | DatetimePatchNonNullDefaultResponse
  >;
}

export interface DatetimeGetNull {
  /** Get models that will return the default object */
  get(
    options?: DatetimeGetNullParameters
  ): StreamableMethod<
    DatetimeGetNull200Response | DatetimeGetNullDefaultResponse
  >;
  /** Put a body with default properties. */
  patch(
    options: DatetimePatchNullParameters
  ): StreamableMethod<
    DatetimePatchNull204Response | DatetimePatchNullDefaultResponse
  >;
}

export interface DurationGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: DurationGetNonNullParameters
  ): StreamableMethod<
    DurationGetNonNull200Response | DurationGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: DurationPatchNonNullParameters
  ): StreamableMethod<
    DurationPatchNonNull204Response | DurationPatchNonNullDefaultResponse
  >;
}

export interface DurationGetNull {
  /** Get models that will return the default object */
  get(
    options?: DurationGetNullParameters
  ): StreamableMethod<
    DurationGetNull200Response | DurationGetNullDefaultResponse
  >;
  /** Put a body with default properties. */
  patch(
    options: DurationPatchNullParameters
  ): StreamableMethod<
    DurationPatchNull204Response | DurationPatchNullDefaultResponse
  >;
}

export interface CollectionsByteGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsByteGetNonNullParameters
  ): StreamableMethod<
    | CollectionsByteGetNonNull200Response
    | CollectionsByteGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: CollectionsBytePatchNonNullParameters
  ): StreamableMethod<
    | CollectionsBytePatchNonNull204Response
    | CollectionsBytePatchNonNullDefaultResponse
  >;
}

export interface CollectionsByteGetNull {
  /** Get models that will return the default object */
  get(
    options?: CollectionsByteGetNullParameters
  ): StreamableMethod<
    CollectionsByteGetNull200Response | CollectionsByteGetNullDefaultResponse
  >;
  /** Put a body with default properties. */
  patch(
    options: CollectionsBytePatchNullParameters
  ): StreamableMethod<
    | CollectionsBytePatchNull204Response
    | CollectionsBytePatchNullDefaultResponse
  >;
}

export interface CollectionsModelGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsModelGetNonNullParameters
  ): StreamableMethod<
    | CollectionsModelGetNonNull200Response
    | CollectionsModelGetNonNullDefaultResponse
  >;
  /** Put a body with all properties present. */
  patch(
    options: CollectionsModelPatchNonNullParameters
  ): StreamableMethod<
    | CollectionsModelPatchNonNull204Response
    | CollectionsModelPatchNonNullDefaultResponse
  >;
}

export interface CollectionsModelGetNull {
  /** Get models that will return the default object */
  get(
    options?: CollectionsModelGetNullParameters
  ): StreamableMethod<
    CollectionsModelGetNull200Response | CollectionsModelGetNullDefaultResponse
  >;
  /** Put a body with default properties. */
  patch(
    options: CollectionsModelPatchNullParameters
  ): StreamableMethod<
    | CollectionsModelPatchNull204Response
    | CollectionsModelPatchNullDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/type/property/nullable/string/non-null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/string/non-null"): StringModelGetNonNull;
  /** Resource for '/type/property/nullable/string/null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/string/null"): StringModelGetNull;
  /** Resource for '/type/property/nullable/bytes/non-null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/bytes/non-null"): BytesGetNonNull;
  /** Resource for '/type/property/nullable/bytes/null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/bytes/null"): BytesGetNull;
  /** Resource for '/type/property/nullable/datetime/non-null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/datetime/non-null"): DatetimeGetNonNull;
  /** Resource for '/type/property/nullable/datetime/null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/datetime/null"): DatetimeGetNull;
  /** Resource for '/type/property/nullable/duration/non-null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/duration/non-null"): DurationGetNonNull;
  /** Resource for '/type/property/nullable/duration/null' has methods for the following verbs: get, patch */
  (path: "/type/property/nullable/duration/null"): DurationGetNull;
  /** Resource for '/type/property/nullable/collections/bytes/non-null' has methods for the following verbs: get, patch */
  (
    path: "/type/property/nullable/collections/bytes/non-null"
  ): CollectionsByteGetNonNull;
  /** Resource for '/type/property/nullable/collections/bytes/null' has methods for the following verbs: get, patch */
  (
    path: "/type/property/nullable/collections/bytes/null"
  ): CollectionsByteGetNull;
  /** Resource for '/type/property/nullable/collections/model/non-null' has methods for the following verbs: get, patch */
  (
    path: "/type/property/nullable/collections/model/non-null"
  ): CollectionsModelGetNonNull;
  /** Resource for '/type/property/nullable/collections/model/null' has methods for the following verbs: get, patch */
  (
    path: "/type/property/nullable/collections/model/null"
  ): CollectionsModelGetNull;
}

export type NullableClient = Client & {
  path: Routes;
};
