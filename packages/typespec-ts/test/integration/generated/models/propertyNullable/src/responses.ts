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
} from "./outputModels";

/** The request has succeeded. */
export interface StringModelGetNonNull200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** The request has succeeded. */
export interface StringModelGetNull200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPatchNull204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BytesGetNonNull200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** The request has succeeded. */
export interface BytesGetNull200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPatchNull204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeGetNonNull200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface DatetimeGetNull200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePatchNull204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationGetNonNull200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** The request has succeeded. */
export interface DurationGetNull200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPatchNull204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsByteGetNonNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** The request has succeeded. */
export interface CollectionsByteGetNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsBytePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsBytePatchNull204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsModelGetNonNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** The request has succeeded. */
export interface CollectionsModelGetNull200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPatchNonNull204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPatchNull204Response extends HttpResponse {
  status: "204";
}
