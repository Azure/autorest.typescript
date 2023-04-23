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
export interface BooleanModelGet200Response extends HttpResponse {
  status: "200";
  body: BooleanPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringModelGet200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BytesGet200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IntGet200Response extends HttpResponse {
  status: "200";
  body: IntPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface FloatGet200Response extends HttpResponse {
  status: "200";
  body: FloatPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeGet200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationGet200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface EnumGet200Response extends HttpResponse {
  status: "200";
  body: EnumPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnumPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtensibleEnumGet200Response extends HttpResponse {
  status: "200";
  body: ExtensibleEnumPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtensibleEnumPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ModelGet200Response extends HttpResponse {
  status: "200";
  body: ModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsStringGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsStringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsStringPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsIntGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsIntPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsIntPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface CollectionsModelGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DictionaryStringGet200Response extends HttpResponse {
  status: "200";
  body: DictionaryStringPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DictionaryStringPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface NeverGet200Response extends HttpResponse {
  status: "200";
  body: NeverPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface NeverPut204Response extends HttpResponse {
  status: "204";
}
