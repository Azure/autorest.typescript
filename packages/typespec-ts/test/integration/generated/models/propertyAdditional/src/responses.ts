// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ExtendsUnknownAdditionalPropertiesOutput,
  ExtendsUnknownAdditionalPropertiesDerivedOutput,
  ExtendsUnknownAdditionalPropertiesDiscriminatedOutput,
  IsUnknownAdditionalPropertiesOutput,
  IsUnknownAdditionalPropertiesDerivedOutput,
  IsUnknownAdditionalPropertiesDiscriminatedOutput,
  ExtendsStringAdditionalPropertiesOutput,
  IsStringAdditionalPropertiesOutput,
  ExtendsFloatAdditionalPropertiesOutput,
  IsFloatAdditionalPropertiesOutput,
  ExtendsModelAdditionalPropertiesOutput,
  IsModelAdditionalPropertiesOutput,
  ExtendsModelArrayAdditionalPropertiesOutput,
  IsModelArrayAdditionalPropertiesOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ExtendsUnknownGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsUnknownAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsUnknownPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsUnknownDerivedGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsUnknownAdditionalPropertiesDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsUnknownDerivedPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsUnknownDiscriminatedGet200Response
  extends HttpResponse {
  status: "200";
  body: ExtendsUnknownAdditionalPropertiesDiscriminatedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsUnknownDiscriminatedPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsUnknownGet200Response extends HttpResponse {
  status: "200";
  body: IsUnknownAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsUnknownPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsUnknownDerivedGet200Response extends HttpResponse {
  status: "200";
  body: IsUnknownAdditionalPropertiesDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsUnknownDerivedPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsUnknownDiscriminatedGet200Response extends HttpResponse {
  status: "200";
  body: IsUnknownAdditionalPropertiesDiscriminatedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsUnknownDiscriminatedPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsStringGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsStringAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsStringPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsStringGet200Response extends HttpResponse {
  status: "200";
  body: IsStringAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsStringPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsFloatGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsFloatAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsFloatPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsFloatGet200Response extends HttpResponse {
  status: "200";
  body: IsFloatAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsFloatPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsModelGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsModelAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsModelGet200Response extends HttpResponse {
  status: "200";
  body: IsModelAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsModelArrayGet200Response extends HttpResponse {
  status: "200";
  body: ExtendsModelArrayAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsModelArrayPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface IsModelArrayGet200Response extends HttpResponse {
  status: "200";
  body: IsModelArrayAdditionalPropertiesOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IsModelArrayPut204Response extends HttpResponse {
  status: "204";
}
