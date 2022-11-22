// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  BooleanPropertyOutput,
  StringPropertyOutput,
  BytesPropertyOutput,
  IntPropertyOutput,
  FloatPropertyOutput,
  DatetimePropertyOutput,
  DurationPropertyOutput,
  EnumPropertyOutput,
  ExtensibleEnumPropertyOutput,
  ModelPropertyOutput,
  CollectionsStringPropertyOutput,
  CollectionsIntPropertyOutput,
  CollectionsModelPropertyOutput,
  DictionaryStringPropertyOutput,
  NeverPropertyOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: BooleanPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: IntPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: FloatPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: EnumPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ExtensibleEnumPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: CollectionsStringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: CollectionsIntPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: DictionaryStringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: NeverPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}
