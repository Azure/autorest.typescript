// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
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

export interface StringModelGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface StringModelGetDefault200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

export interface StringModelGetDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPutAll204Response extends HttpResponse {
  status: "204";
}

export interface StringModelPutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPutDefault204Response extends HttpResponse {
  status: "204";
}

export interface StringModelPutDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BytesGetAll200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BytesGetDefault200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPutAll204Response extends HttpResponse {
  status: "204";
}

export interface BytesPutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPutDefault204Response extends HttpResponse {
  status: "204";
}

export interface BytesPutDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeGetAll200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeGetDefault200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePutAll204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePutDefault204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePutDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationGetAll200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationGetDefault200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPutAll204Response extends HttpResponse {
  status: "204";
}

export interface DurationPutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPutDefault204Response extends HttpResponse {
  status: "204";
}

export interface DurationPutDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsByteGetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

export interface CollectionsByteGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsByteGetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

export interface CollectionsByteGetDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePutAll204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsBytePutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePutDefault204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsBytePutDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsModelGetAll200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsModelGetDefault200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetDefaultDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPutAll204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPutDefault204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPutDefaultDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface RequiredAndOptionalGetAll200Response extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

export interface RequiredAndOptionalGetAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface RequiredAndOptionalGetRequiredOnly200Response
  extends HttpResponse {
  status: "200";
  body: RequiredAndOptionalPropertyOutput;
}

export interface RequiredAndOptionalGetRequiredOnlyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredAndOptionalPutAll204Response extends HttpResponse {
  status: "204";
}

export interface RequiredAndOptionalPutAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredAndOptionalPutRequiredOnly204Response
  extends HttpResponse {
  status: "204";
}

export interface RequiredAndOptionalPutRequiredOnlyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
