// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  StringExtensibleNamedUnionOutput,
  CatOutput,
  DogOutput,
  EnumsOnlyCasesOutput,
  StringAndArrayCasesOutput,
  MixedLiteralsCasesOutput,
  MixedTypesCasesOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface StringsOnlyGet200Response extends HttpResponse {
  status: "200";
  body: { prop: "a" | "b" | "c" };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringsOnlySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringExtensibleGet200Response extends HttpResponse {
  status: "200";
  body: { prop: string | "b" | "c" };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringExtensibleSend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringExtensibleNamedGet200Response extends HttpResponse {
  status: "200";
  body: { prop: StringExtensibleNamedUnionOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringExtensibleNamedSend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IntsOnlyGet200Response extends HttpResponse {
  status: "200";
  body: { prop: 1 | 2 | 3 };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntsOnlySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface FloatsOnlyGet200Response extends HttpResponse {
  status: "200";
  body: { prop: 1.1 | 2.2 | 3.3 };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatsOnlySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ModelsOnlyGet200Response extends HttpResponse {
  status: "200";
  body: { prop: CatOutput | DogOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelsOnlySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface EnumsOnlyGet200Response extends HttpResponse {
  status: "200";
  body: { prop: EnumsOnlyCasesOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnumsOnlySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringAndArrayGet200Response extends HttpResponse {
  status: "200";
  body: { prop: StringAndArrayCasesOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringAndArraySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface MixedLiteralsGet200Response extends HttpResponse {
  status: "200";
  body: { prop: MixedLiteralsCasesOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface MixedLiteralsSend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface MixedTypesGet200Response extends HttpResponse {
  status: "200";
  body: { prop: MixedTypesCasesOutput };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface MixedTypesSend204Response extends HttpResponse {
  status: "204";
}
