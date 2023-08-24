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
  RequiredAndOptionalGetAllParameters,
  RequiredAndOptionalPutAllParameters,
  RequiredAndOptionalGetRequiredOnlyParameters,
  RequiredAndOptionalPutRequiredOnlyParameters,
} from "./parameters";
import {
  StringModelGetAll200Response,
  StringModelGetAllDefaultResponse,
  StringModelPutAll204Response,
  StringModelPutAllDefaultResponse,
  StringModelGetDefault200Response,
  StringModelGetDefaultDefaultResponse,
  StringModelPutDefault204Response,
  StringModelPutDefaultDefaultResponse,
  BytesGetAll200Response,
  BytesGetAllDefaultResponse,
  BytesPutAll204Response,
  BytesPutAllDefaultResponse,
  BytesGetDefault200Response,
  BytesGetDefaultDefaultResponse,
  BytesPutDefault204Response,
  BytesPutDefaultDefaultResponse,
  DatetimeGetAll200Response,
  DatetimeGetAllDefaultResponse,
  DatetimePutAll204Response,
  DatetimePutAllDefaultResponse,
  DatetimeGetDefault200Response,
  DatetimeGetDefaultDefaultResponse,
  DatetimePutDefault204Response,
  DatetimePutDefaultDefaultResponse,
  DurationGetAll200Response,
  DurationGetAllDefaultResponse,
  DurationPutAll204Response,
  DurationPutAllDefaultResponse,
  DurationGetDefault200Response,
  DurationGetDefaultDefaultResponse,
  DurationPutDefault204Response,
  DurationPutDefaultDefaultResponse,
  CollectionsByteGetAll200Response,
  CollectionsByteGetAllDefaultResponse,
  CollectionsBytePutAll204Response,
  CollectionsBytePutAllDefaultResponse,
  CollectionsByteGetDefault200Response,
  CollectionsByteGetDefaultDefaultResponse,
  CollectionsBytePutDefault204Response,
  CollectionsBytePutDefaultDefaultResponse,
  CollectionsModelGetAll200Response,
  CollectionsModelGetAllDefaultResponse,
  CollectionsModelPutAll204Response,
  CollectionsModelPutAllDefaultResponse,
  CollectionsModelGetDefault200Response,
  CollectionsModelGetDefaultDefaultResponse,
  CollectionsModelPutDefault204Response,
  CollectionsModelPutDefaultDefaultResponse,
  RequiredAndOptionalGetAll200Response,
  RequiredAndOptionalGetAllDefaultResponse,
  RequiredAndOptionalPutAll204Response,
  RequiredAndOptionalPutAllDefaultResponse,
  RequiredAndOptionalGetRequiredOnly200Response,
  RequiredAndOptionalGetRequiredOnlyDefaultResponse,
  RequiredAndOptionalPutRequiredOnly204Response,
  RequiredAndOptionalPutRequiredOnlyDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: StringModelGetAllParameters
  ): StreamableMethod<
    StringModelGetAll200Response | StringModelGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: StringModelPutAllParameters
  ): StreamableMethod<
    StringModelPutAll204Response | StringModelPutAllDefaultResponse
  >;
}

export interface StringModelGetDefault {
  /** Get models that will return the default object */
  get(
    options?: StringModelGetDefaultParameters
  ): StreamableMethod<
    StringModelGetDefault200Response | StringModelGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: StringModelPutDefaultParameters
  ): StreamableMethod<
    StringModelPutDefault204Response | StringModelPutDefaultDefaultResponse
  >;
}

export interface BytesGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: BytesGetAllParameters
  ): StreamableMethod<BytesGetAll200Response | BytesGetAllDefaultResponse>;
  /** Put a body with all properties present. */
  put(
    options: BytesPutAllParameters
  ): StreamableMethod<BytesPutAll204Response | BytesPutAllDefaultResponse>;
}

export interface BytesGetDefault {
  /** Get models that will return the default object */
  get(
    options?: BytesGetDefaultParameters
  ): StreamableMethod<
    BytesGetDefault200Response | BytesGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: BytesPutDefaultParameters
  ): StreamableMethod<
    BytesPutDefault204Response | BytesPutDefaultDefaultResponse
  >;
}

export interface DatetimeGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DatetimeGetAllParameters
  ): StreamableMethod<
    DatetimeGetAll200Response | DatetimeGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: DatetimePutAllParameters
  ): StreamableMethod<
    DatetimePutAll204Response | DatetimePutAllDefaultResponse
  >;
}

export interface DatetimeGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DatetimeGetDefaultParameters
  ): StreamableMethod<
    DatetimeGetDefault200Response | DatetimeGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: DatetimePutDefaultParameters
  ): StreamableMethod<
    DatetimePutDefault204Response | DatetimePutDefaultDefaultResponse
  >;
}

export interface DurationGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: DurationGetAllParameters
  ): StreamableMethod<
    DurationGetAll200Response | DurationGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: DurationPutAllParameters
  ): StreamableMethod<
    DurationPutAll204Response | DurationPutAllDefaultResponse
  >;
}

export interface DurationGetDefault {
  /** Get models that will return the default object */
  get(
    options?: DurationGetDefaultParameters
  ): StreamableMethod<
    DurationGetDefault200Response | DurationGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: DurationPutDefaultParameters
  ): StreamableMethod<
    DurationPutDefault204Response | DurationPutDefaultDefaultResponse
  >;
}

export interface CollectionsByteGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsByteGetAllParameters
  ): StreamableMethod<
    CollectionsByteGetAll200Response | CollectionsByteGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: CollectionsBytePutAllParameters
  ): StreamableMethod<
    CollectionsBytePutAll204Response | CollectionsBytePutAllDefaultResponse
  >;
}

export interface CollectionsByteGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsByteGetDefaultParameters
  ): StreamableMethod<
    | CollectionsByteGetDefault200Response
    | CollectionsByteGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: CollectionsBytePutDefaultParameters
  ): StreamableMethod<
    | CollectionsBytePutDefault204Response
    | CollectionsBytePutDefaultDefaultResponse
  >;
}

export interface CollectionsModelGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: CollectionsModelGetAllParameters
  ): StreamableMethod<
    CollectionsModelGetAll200Response | CollectionsModelGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: CollectionsModelPutAllParameters
  ): StreamableMethod<
    CollectionsModelPutAll204Response | CollectionsModelPutAllDefaultResponse
  >;
}

export interface CollectionsModelGetDefault {
  /** Get models that will return the default object */
  get(
    options?: CollectionsModelGetDefaultParameters
  ): StreamableMethod<
    | CollectionsModelGetDefault200Response
    | CollectionsModelGetDefaultDefaultResponse
  >;
  /** Put a body with default properties. */
  put(
    options: CollectionsModelPutDefaultParameters
  ): StreamableMethod<
    | CollectionsModelPutDefault204Response
    | CollectionsModelPutDefaultDefaultResponse
  >;
}

export interface RequiredAndOptionalGetAll {
  /** Get models that will return all properties in the model */
  get(
    options?: RequiredAndOptionalGetAllParameters
  ): StreamableMethod<
    | RequiredAndOptionalGetAll200Response
    | RequiredAndOptionalGetAllDefaultResponse
  >;
  /** Put a body with all properties present. */
  put(
    options: RequiredAndOptionalPutAllParameters
  ): StreamableMethod<
    | RequiredAndOptionalPutAll204Response
    | RequiredAndOptionalPutAllDefaultResponse
  >;
}

export interface RequiredAndOptionalGetRequiredOnly {
  /** Get models that will return only the required properties */
  get(
    options?: RequiredAndOptionalGetRequiredOnlyParameters
  ): StreamableMethod<
    | RequiredAndOptionalGetRequiredOnly200Response
    | RequiredAndOptionalGetRequiredOnlyDefaultResponse
  >;
  /** Put a body with only required properties. */
  put(
    options: RequiredAndOptionalPutRequiredOnlyParameters
  ): StreamableMethod<
    | RequiredAndOptionalPutRequiredOnly204Response
    | RequiredAndOptionalPutRequiredOnlyDefaultResponse
  >;
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
    path: "/type/property/optional/collections/bytes/all"
  ): CollectionsByteGetAll;
  /** Resource for '/type/property/optional/collections/bytes/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/bytes/default"
  ): CollectionsByteGetDefault;
  /** Resource for '/type/property/optional/collections/model/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/model/all"
  ): CollectionsModelGetAll;
  /** Resource for '/type/property/optional/collections/model/default' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/collections/model/default"
  ): CollectionsModelGetDefault;
  /** Resource for '/type/property/optional/requiredAndOptional/all' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/requiredAndOptional/all"
  ): RequiredAndOptionalGetAll;
  /** Resource for '/type/property/optional/requiredAndOptional/requiredOnly' has methods for the following verbs: get, put */
  (
    path: "/type/property/optional/requiredAndOptional/requiredOnly"
  ): RequiredAndOptionalGetRequiredOnly;
}

export type OptionalClient = Client & {
  path: Routes;
};
