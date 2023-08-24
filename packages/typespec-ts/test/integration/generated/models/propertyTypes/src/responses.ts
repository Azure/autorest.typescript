// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
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
  UnknownStringPropertyOutput,
  UnknownIntPropertyOutput,
  UnknownDictPropertyOutput,
  UnknownArrayPropertyOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface BooleanModelGet200Response extends HttpResponse {
  status: "200";
  body: BooleanPropertyOutput;
}

export interface BooleanModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanModelPut204Response extends HttpResponse {
  status: "204";
}

export interface BooleanModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface StringModelGet200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

export interface StringModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPut204Response extends HttpResponse {
  status: "204";
}

export interface StringModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BytesGet200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPut204Response extends HttpResponse {
  status: "204";
}

export interface BytesPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface IntGet200Response extends HttpResponse {
  status: "200";
  body: IntPropertyOutput;
}

export interface IntGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntPut204Response extends HttpResponse {
  status: "204";
}

export interface IntPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface FloatGet200Response extends HttpResponse {
  status: "200";
  body: FloatPropertyOutput;
}

export interface FloatGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatPut204Response extends HttpResponse {
  status: "204";
}

export interface FloatPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeGet200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePut204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationGet200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPut204Response extends HttpResponse {
  status: "204";
}

export interface DurationPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface EnumGet200Response extends HttpResponse {
  status: "200";
  body: EnumPropertyOutput;
}

export interface EnumGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnumPut204Response extends HttpResponse {
  status: "204";
}

export interface EnumPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ExtensibleEnumGet200Response extends HttpResponse {
  status: "200";
  body: ExtensibleEnumPropertyOutput;
}

export interface ExtensibleEnumGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtensibleEnumPut204Response extends HttpResponse {
  status: "204";
}

export interface ExtensibleEnumPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ModelGet200Response extends HttpResponse {
  status: "200";
  body: ModelPropertyOutput;
}

export interface ModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelPut204Response extends HttpResponse {
  status: "204";
}

export interface ModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsStringGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsStringPropertyOutput;
}

export interface CollectionsStringGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsStringPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsStringPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsIntGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsIntPropertyOutput;
}

export interface CollectionsIntGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsIntPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsIntPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface CollectionsModelGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DictionaryStringGet200Response extends HttpResponse {
  status: "200";
  body: DictionaryStringPropertyOutput;
}

export interface DictionaryStringGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DictionaryStringPut204Response extends HttpResponse {
  status: "204";
}

export interface DictionaryStringPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface NeverGet200Response extends HttpResponse {
  status: "200";
  body: NeverPropertyOutput;
}

export interface NeverGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface NeverPut204Response extends HttpResponse {
  status: "204";
}

export interface NeverPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface UnknownStringGet200Response extends HttpResponse {
  status: "200";
  body: UnknownStringPropertyOutput;
}

export interface UnknownStringGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownStringPut204Response extends HttpResponse {
  status: "204";
}

export interface UnknownStringPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface UnknownIntGet200Response extends HttpResponse {
  status: "200";
  body: UnknownIntPropertyOutput;
}

export interface UnknownIntGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownIntPut204Response extends HttpResponse {
  status: "204";
}

export interface UnknownIntPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface UnknownDictGet200Response extends HttpResponse {
  status: "200";
  body: UnknownDictPropertyOutput;
}

export interface UnknownDictGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownDictPut204Response extends HttpResponse {
  status: "204";
}

export interface UnknownDictPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface UnknownArrayGet200Response extends HttpResponse {
  status: "200";
  body: UnknownArrayPropertyOutput;
}

export interface UnknownArrayGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownArrayPut204Response extends HttpResponse {
  status: "204";
}

export interface UnknownArrayPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
