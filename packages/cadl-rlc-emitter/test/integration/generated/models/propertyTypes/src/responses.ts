import { HttpResponse } from "@azure-rest/core-client";
import {
  BooleanPropertyOutput,
  ErrorResponseOutput,
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
} from "./outputModels";

/** The request has succeeded. */
export interface BooleanGet200Response extends HttpResponse {
  status: "200";
  body: BooleanPropertyOutput;
}

export interface BooleanGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanPut204Response extends HttpResponse {
  status: "204";
}

export interface BooleanPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface StringGet200Response extends HttpResponse {
  status: "200";
  body: StringPropertyOutput;
}

export interface StringGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringPut204Response extends HttpResponse {
  status: "204";
}

export interface StringPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface BytesGet200Response extends HttpResponse {
  status: "200";
  body: BytesPropertyOutput;
}

export interface BytesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BytesPut204Response extends HttpResponse {
  status: "204";
}

export interface BytesPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface IntGet200Response extends HttpResponse {
  status: "200";
  body: IntPropertyOutput;
}

export interface IntGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IntPut204Response extends HttpResponse {
  status: "204";
}

export interface IntPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FloatGet200Response extends HttpResponse {
  status: "200";
  body: FloatPropertyOutput;
}

export interface FloatGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatPut204Response extends HttpResponse {
  status: "204";
}

export interface FloatPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DatetimeGet200Response extends HttpResponse {
  status: "200";
  body: DatetimePropertyOutput;
}

export interface DatetimeGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimePut204Response extends HttpResponse {
  status: "204";
}

export interface DatetimePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DurationGet200Response extends HttpResponse {
  status: "200";
  body: DurationPropertyOutput;
}

export interface DurationGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationPut204Response extends HttpResponse {
  status: "204";
}

export interface DurationPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface EnumGet200Response extends HttpResponse {
  status: "200";
  body: EnumPropertyOutput;
}

export interface EnumGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnumPut204Response extends HttpResponse {
  status: "204";
}

export interface EnumPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ExtensibleEnumGet200Response extends HttpResponse {
  status: "200";
  body: ExtensibleEnumPropertyOutput;
}

export interface ExtensibleEnumGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtensibleEnumPut204Response extends HttpResponse {
  status: "204";
}

export interface ExtensibleEnumPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelGet200Response extends HttpResponse {
  status: "200";
  body: ModelPropertyOutput;
}

export interface ModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelPut204Response extends HttpResponse {
  status: "204";
}

export interface ModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsStringGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsStringPropertyOutput;
}

export interface CollectionsStringGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsStringPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsStringPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsIntGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsIntPropertyOutput;
}

export interface CollectionsIntGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsIntPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsIntPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsModelGet200Response extends HttpResponse {
  status: "200";
  body: CollectionsModelPropertyOutput;
}

export interface CollectionsModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsModelPut204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
