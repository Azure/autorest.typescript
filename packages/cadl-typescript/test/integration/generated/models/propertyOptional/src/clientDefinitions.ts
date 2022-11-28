// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringGetAllParameters,
  StringPutAllParameters,
  StringGetDefaultParameters,
  StringPutDefaultParameters,
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
  RequiredAndOptionalGetAllParameters,
  RequiredAndOptionalPutAllParameters,
  RequiredAndOptionalGetRequiredOnlyParameters,
  RequiredAndOptionalPutRequiredOnlyParameters,
} from "./parameters";
import {
  StringGetAll200Response,
  StringPutAll204Response,
  StringGetDefault200Response,
  StringPutDefault204Response,
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
  RequiredAndOptionalGetAll200Response,
  RequiredAndOptionalPutAll204Response,
  RequiredAndOptionalGetRequiredOnly200Response,
  RequiredAndOptionalPutRequiredOnly204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: StringGetAllParameters
  ): StreamableMethod<StringGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: StringPutAllParameters
  ): StreamableMethod<StringPutAll204Response>;
}

export interface StringGetDefault {
  /** Get models that will return the default object */
  get(
    options?: StringGetDefaultParameters
  ): StreamableMethod<StringGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: StringPutDefaultParameters
  ): StreamableMethod<StringPutDefault204Response>;
}

export interface BytesGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: BytesGetAllParameters
  ): StreamableMethod<BytesGetAll200Response>;
  /** Put a body with all properties present. */
  put(options: BytesPutAllParameters): StreamableMethod<BytesPutAll204Response>;
}

export interface BytesGetDefault {
  /** Get models that will return the default object */
  get(
    options?: BytesGetDefaultParameters
  ): StreamableMethod<BytesGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: BytesPutDefaultParameters
  ): StreamableMethod<BytesPutDefault204Response>;
}

export interface DatetimeGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DatetimeGetAllParameters
  ): StreamableMethod<DatetimeGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: DatetimePutAllParameters
  ): StreamableMethod<DatetimePutAll204Response>;
}

export interface DatetimeGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DatetimeGetDefaultParameters
  ): StreamableMethod<DatetimeGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: DatetimePutDefaultParameters
  ): StreamableMethod<DatetimePutDefault204Response>;
}

export interface DurationGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DurationGetAllParameters
  ): StreamableMethod<DurationGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: DurationPutAllParameters
  ): StreamableMethod<DurationPutAll204Response>;
}

export interface DurationGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DurationGetDefaultParameters
  ): StreamableMethod<DurationGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: DurationPutDefaultParameters
  ): StreamableMethod<DurationPutDefault204Response>;
}

export interface CollectionsByteGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsByteGetAllParameters
  ): StreamableMethod<CollectionsByteGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: CollectionsBytePutAllParameters
  ): StreamableMethod<CollectionsBytePutAll204Response>;
}

export interface CollectionsByteGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsByteGetDefaultParameters
  ): StreamableMethod<CollectionsByteGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: CollectionsBytePutDefaultParameters
  ): StreamableMethod<CollectionsBytePutDefault204Response>;
}

export interface CollectionsModelGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsModelGetAllParameters
  ): StreamableMethod<CollectionsModelGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: CollectionsModelPutAllParameters
  ): StreamableMethod<CollectionsModelPutAll204Response>;
}

export interface CollectionsModelGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsModelGetDefaultParameters
  ): StreamableMethod<CollectionsModelGetDefault200Response>;
  /** Put a body with default properties. */
  put(
    options: CollectionsModelPutDefaultParameters
  ): StreamableMethod<CollectionsModelPutDefault204Response>;
}

export interface RequiredAndOptionalGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: RequiredAndOptionalGetAllParameters
  ): StreamableMethod<RequiredAndOptionalGetAll200Response>;
  /** Put a body with all properties present. */
  put(
    options: RequiredAndOptionalPutAllParameters
  ): StreamableMethod<RequiredAndOptionalPutAll204Response>;
}

export interface RequiredAndOptionalGetRequiredOnly {
  /** Get models that will return only the required properties */
  get(
    options?: RequiredAndOptionalGetRequiredOnlyParameters
  ): StreamableMethod<RequiredAndOptionalGetRequiredOnly200Response>;
  /** Put a body with only required properties. */
  put(
    options: RequiredAndOptionalPutRequiredOnlyParameters
  ): StreamableMethod<RequiredAndOptionalPutRequiredOnly204Response>;
}

export interface Routes {
  /** Resource for '/models/properties/optional/string/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/string/all"): StringGetAll;
  /** Resource for '/models/properties/optional/string/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/string/default"): StringGetDefault;
  /** Resource for '/models/properties/optional/bytes/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/bytes/all"): BytesGetAll;
  /** Resource for '/models/properties/optional/bytes/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/bytes/default"): BytesGetDefault;
  /** Resource for '/models/properties/optional/datetime/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/datetime/all"): DatetimeGetAll;
  /** Resource for '/models/properties/optional/datetime/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/datetime/default"): DatetimeGetDefault;
  /** Resource for '/models/properties/optional/duration/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/duration/all"): DurationGetAll;
  /** Resource for '/models/properties/optional/duration/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/duration/default"): DurationGetDefault;
  /** Resource for '/models/properties/optional/collections/bytes/all' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/collections/bytes/all"
  ): CollectionsByteGetAll;
  /** Resource for '/models/properties/optional/collections/bytes/default' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/collections/bytes/default"
  ): CollectionsByteGetDefault;
  /** Resource for '/models/properties/optional/collections/model/all' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/collections/model/all"
  ): CollectionsModelGetAll;
  /** Resource for '/models/properties/optional/collections/model/default' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/collections/model/default"
  ): CollectionsModelGetDefault;
  /** Resource for '/models/properties/optional/requiredAndOptional/all' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/requiredAndOptional/all"
  ): RequiredAndOptionalGetAll;
  /** Resource for '/models/properties/optional/requiredAndOptional/requiredOnly' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/requiredAndOptional/requiredOnly"
  ): RequiredAndOptionalGetRequiredOnly;
}

export type ModelsPropertyOptionalClient = Client & {
  path: Routes;
};
