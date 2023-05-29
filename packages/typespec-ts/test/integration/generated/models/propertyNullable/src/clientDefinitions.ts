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
  StringModelPatchNonNull204Response,
  StringModelGetNull200Response,
  StringModelPatchNull204Response,
  BytesGetNonNull200Response,
  BytesPatchNonNull204Response,
  BytesGetNull200Response,
  BytesPatchNull204Response,
  DatetimeGetNonNull200Response,
  DatetimePatchNonNull204Response,
  DatetimeGetNull200Response,
  DatetimePatchNull204Response,
  DurationGetNonNull200Response,
  DurationPatchNonNull204Response,
  DurationGetNull200Response,
  DurationPatchNull204Response,
  CollectionsByteGetNonNull200Response,
  CollectionsBytePatchNonNull204Response,
  CollectionsByteGetNull200Response,
  CollectionsBytePatchNull204Response,
  CollectionsModelGetNonNull200Response,
  CollectionsModelPatchNonNull204Response,
  CollectionsModelGetNull200Response,
  CollectionsModelPatchNull204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: StringModelGetNonNullParameters
  ): StreamableMethod<StringModelGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: StringModelPatchNonNullParameters
  ): StreamableMethod<StringModelPatchNonNull204Response>;
}

export interface StringModelGetNull {
  /** Get models that will return the default object */
  get(
    options?: StringModelGetNullParameters
  ): StreamableMethod<StringModelGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: StringModelPatchNullParameters
  ): StreamableMethod<StringModelPatchNull204Response>;
}

export interface BytesGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: BytesGetNonNullParameters
  ): StreamableMethod<BytesGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: BytesPatchNonNullParameters
  ): StreamableMethod<BytesPatchNonNull204Response>;
}

export interface BytesGetNull {
  /** Get models that will return the default object */
  get(
    options?: BytesGetNullParameters
  ): StreamableMethod<BytesGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: BytesPatchNullParameters
  ): StreamableMethod<BytesPatchNull204Response>;
}

export interface DatetimeGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: DatetimeGetNonNullParameters
  ): StreamableMethod<DatetimeGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: DatetimePatchNonNullParameters
  ): StreamableMethod<DatetimePatchNonNull204Response>;
}

export interface DatetimeGetNull {
  /** Get models that will return the default object */
  get(
    options?: DatetimeGetNullParameters
  ): StreamableMethod<DatetimeGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: DatetimePatchNullParameters
  ): StreamableMethod<DatetimePatchNull204Response>;
}

export interface DurationGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: DurationGetNonNullParameters
  ): StreamableMethod<DurationGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: DurationPatchNonNullParameters
  ): StreamableMethod<DurationPatchNonNull204Response>;
}

export interface DurationGetNull {
  /** Get models that will return the default object */
  get(
    options?: DurationGetNullParameters
  ): StreamableMethod<DurationGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: DurationPatchNullParameters
  ): StreamableMethod<DurationPatchNull204Response>;
}

export interface CollectionsByteGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsByteGetNonNullParameters
  ): StreamableMethod<CollectionsByteGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: CollectionsBytePatchNonNullParameters
  ): StreamableMethod<CollectionsBytePatchNonNull204Response>;
}

export interface CollectionsByteGetNull {
  /** Get models that will return the default object */
  get(
    options?: CollectionsByteGetNullParameters
  ): StreamableMethod<CollectionsByteGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: CollectionsBytePatchNullParameters
  ): StreamableMethod<CollectionsBytePatchNull204Response>;
}

export interface CollectionsModelGetNonNull {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsModelGetNonNullParameters
  ): StreamableMethod<CollectionsModelGetNonNull200Response>;
  /** Put a body with all properties present. */
  patch(
    options: CollectionsModelPatchNonNullParameters
  ): StreamableMethod<CollectionsModelPatchNonNull204Response>;
}

export interface CollectionsModelGetNull {
  /** Get models that will return the default object */
  get(
    options?: CollectionsModelGetNullParameters
  ): StreamableMethod<CollectionsModelGetNull200Response>;
  /** Put a body with default properties. */
  patch(
    options: CollectionsModelPatchNullParameters
  ): StreamableMethod<CollectionsModelPatchNull204Response>;
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

export type TypePropertyNullableClient = Client & {
  path: Routes;
};
