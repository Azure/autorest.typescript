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
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** The request has succeeded. */
export interface GetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetAll200Response extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

/** The request has succeeded. */
export interface GetRequiredOnly200Response extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutRequiredOnly204Response extends HttpResponse {
  status: "204";
}
