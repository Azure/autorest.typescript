// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  StringPropertyOutput,
  BytesPropertyOutput,
  DatetimePropertyOutput,
  DurationPropertyOutput,
  CollectionsBytePropertyOutput,
  CollectionsModelPropertyOutput,
  RequiredAndOptionalPropertyOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface StringModelGetAll200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** The request has succeeded. */
export interface StringModelGetDefault200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BytesGetAll200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** The request has succeeded. */
export interface BytesGetDefault200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeGetAll200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface DatetimeGetDefault200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationGetAll200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** The request has succeeded. */
export interface DurationGetDefault200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsByteGetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** The request has succeeded. */
export interface CollectionsByteGetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsModelGetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** The request has succeeded. */
export interface CollectionsModelGetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface RequiredAndOptionalGetAll200Response extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

/** The request has succeeded. */
export interface RequiredAndOptionalGetRequiredOnly200Response
  extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredAndOptionalPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredAndOptionalPutRequiredOnly204Response
  extends HttpResponse {
  status: "204";
}
