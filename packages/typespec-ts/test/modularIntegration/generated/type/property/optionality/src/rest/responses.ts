// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  StringPropertyOutput,
  BytesPropertyOutput,
  DatetimePropertyOutput,
  DurationPropertyOutput,
  PlainDatePropertyOutput,
  PlainTimePropertyOutput,
  CollectionsBytePropertyOutput,
  CollectionsModelPropertyOutput,
  StringLiteralPropertyOutput,
  IntLiteralPropertyOutput,
  FloatLiteralPropertyOutput,
  BooleanLiteralPropertyOutput,
  UnionStringLiteralPropertyOutput,
  UnionIntLiteralPropertyOutput,
  UnionFloatLiteralPropertyOutput,
  RequiredAndOptionalPropertyOutput,
} from "./outputModels.js";

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
export interface PlainDateGetAll200Response extends HttpResponse {
  status: "200";
  body: PlainDatePropertyOutput;
}

/** The request has succeeded. */
export interface PlainDateGetDefault200Response extends HttpResponse {
  status: "200";
  body: PlainDatePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PlainDatePutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PlainDatePutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PlainTimeGetAll200Response extends HttpResponse {
  status: "200";
  body: PlainTimePropertyOutput;
}

/** The request has succeeded. */
export interface PlainTimeGetDefault200Response extends HttpResponse {
  status: "200";
  body: PlainTimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PlainTimePutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PlainTimePutDefault204Response extends HttpResponse {
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
export interface StringLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: StringLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface StringLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: StringLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IntLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: IntLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface IntLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: IntLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface FloatLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: FloatLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface FloatLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: FloatLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: BooleanLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface BooleanLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: BooleanLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnionStringLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: UnionStringLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface UnionStringLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: UnionStringLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionStringLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionStringLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnionIntLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: UnionIntLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface UnionIntLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: UnionIntLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionIntLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionIntLiteralPutDefault204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnionFloatLiteralGetAll200Response extends HttpResponse {
  status: "200";
  body: UnionFloatLiteralPropertyOutput;
}

/** The request has succeeded. */
export interface UnionFloatLiteralGetDefault200Response extends HttpResponse {
  status: "200";
  body: UnionFloatLiteralPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionFloatLiteralPutAll204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnionFloatLiteralPutDefault204Response extends HttpResponse {
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
