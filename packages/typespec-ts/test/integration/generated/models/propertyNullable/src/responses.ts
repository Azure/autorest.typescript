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
} from "./outputModels";

/** The request has succeeded. */
export interface StringModelGetNonNull200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

export interface StringModelGetNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface StringModelGetNull200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

export interface StringModelGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface StringModelPatchNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPatchNull204Response extends HttpResponse {
  status: "204";
}

export interface StringModelPatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BytesGetNonNull200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BytesGetNull200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface BytesPatchNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPatchNull204Response extends HttpResponse {
  status: "204";
}

export interface BytesPatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeGetNonNull200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeGetNull200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePatchNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePatchNull204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationGetNonNull200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationGetNull200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface DurationPatchNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPatchNull204Response extends HttpResponse {
  status: "204";
}

export interface DurationPatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsByteGetNonNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

export interface CollectionsByteGetNonNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsByteGetNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

export interface CollectionsByteGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsBytePatchNonNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePatchNull204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsBytePatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsModelGetNonNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetNonNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsModelGetNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPatchNonNull204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPatchNonNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPatchNull204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPatchNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
