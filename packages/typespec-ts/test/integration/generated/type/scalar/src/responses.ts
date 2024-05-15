// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface StringModelGet200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanModelGet200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnknownGet200Response extends HttpResponse {
  status: "200";
  body: any;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DecimalTypeResponseBody200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DecimalTypeRequestBody204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DecimalTypeRequestParameter204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Decimal128TypeResponseBody200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Decimal128TypeRequestBody204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Decimal128TypeRequestParameter204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DecimalVerifyPrepareVerify200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DecimalVerifyVerify204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Decimal128VerifyPrepareVerify200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Decimal128VerifyVerify204Response extends HttpResponse {
  status: "204";
}
