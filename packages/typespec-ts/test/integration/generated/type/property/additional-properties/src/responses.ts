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
  SpreadStringRecordOutput,
  ExtendsFloatAdditionalPropertiesOutput,
  IsFloatAdditionalPropertiesOutput,
  SpreadFloatRecordOutput,
  ExtendsModelAdditionalPropertiesOutput,
  IsModelAdditionalPropertiesOutput,
  SpreadModelRecordOutput,
  ExtendsModelArrayAdditionalPropertiesOutput,
  IsModelArrayAdditionalPropertiesOutput,
  SpreadModelArrayRecordOutput,
  DifferentSpreadStringRecordOutput,
  DifferentSpreadFloatRecordOutput,
  DifferentSpreadModelRecordOutput,
  DifferentSpreadModelArrayRecordOutput,
  DifferentSpreadStringDerivedOutput,
  DifferentSpreadFloatDerivedOutput,
  DifferentSpreadModelDerivedOutput,
  DifferentSpreadModelArrayDerivedOutput,
  MultipleSpreadRecordOutput,
  SpreadRecordForUnionOutput,
  SpreadRecordForDiscriminatedUnionOutput,
  SpreadRecordForNonDiscriminatedUnionOutput,
  SpreadRecordForNonDiscriminatedUnion2Output,
  SpreadRecordForNonDiscriminatedUnion3Output,
} from "./outputModels.js";

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
export interface SpreadStringGet200Response extends HttpResponse {
  status: "200";
  body: SpreadStringRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadStringPut204Response extends HttpResponse {
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
export interface SpreadFloatGet200Response extends HttpResponse {
  status: "200";
  body: SpreadFloatRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadFloatPut204Response extends HttpResponse {
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
export interface SpreadModelGet200Response extends HttpResponse {
  status: "200";
  body: SpreadModelRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadModelPut204Response extends HttpResponse {
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

/** The request has succeeded. */
export interface SpreadModelArrayGet200Response extends HttpResponse {
  status: "200";
  body: SpreadModelArrayRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadModelArrayPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadDifferentStringGet200Response extends HttpResponse {
  status: "200";
  body: DifferentSpreadStringRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadDifferentStringPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadDifferentFloatGet200Response extends HttpResponse {
  status: "200";
  body: DifferentSpreadFloatRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadDifferentFloatPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadDifferentModelGet200Response extends HttpResponse {
  status: "200";
  body: DifferentSpreadModelRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadDifferentModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadDifferentModelArrayGet200Response extends HttpResponse {
  status: "200";
  body: DifferentSpreadModelArrayRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadDifferentModelArrayPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsDifferentSpreadStringGet200Response
  extends HttpResponse {
  status: "200";
  body: DifferentSpreadStringDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsDifferentSpreadStringPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsDifferentSpreadFloatGet200Response
  extends HttpResponse {
  status: "200";
  body: DifferentSpreadFloatDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsDifferentSpreadFloatPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsDifferentSpreadModelGet200Response
  extends HttpResponse {
  status: "200";
  body: DifferentSpreadModelDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsDifferentSpreadModelPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ExtendsDifferentSpreadModelArrayGet200Response
  extends HttpResponse {
  status: "200";
  body: DifferentSpreadModelArrayDerivedOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExtendsDifferentSpreadModelArrayPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface MultipleSpreadGet200Response extends HttpResponse {
  status: "200";
  body: MultipleSpreadRecordOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface MultipleSpreadPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadRecordUnionGet200Response extends HttpResponse {
  status: "200";
  body: SpreadRecordForUnionOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadRecordUnionPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadRecordDiscriminatedUnionGet200Response
  extends HttpResponse {
  status: "200";
  body: SpreadRecordForDiscriminatedUnionOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadRecordDiscriminatedUnionPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadRecordNonDiscriminatedUnionGet200Response
  extends HttpResponse {
  status: "200";
  body: SpreadRecordForNonDiscriminatedUnionOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadRecordNonDiscriminatedUnionPut204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadRecordNonDiscriminatedUnion2Get200Response
  extends HttpResponse {
  status: "200";
  body: SpreadRecordForNonDiscriminatedUnion2Output;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadRecordNonDiscriminatedUnion2Put204Response
  extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface SpreadRecordNonDiscriminatedUnion3Get200Response
  extends HttpResponse {
  status: "200";
  body: SpreadRecordForNonDiscriminatedUnion3Output;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SpreadRecordNonDiscriminatedUnion3Put204Response
  extends HttpResponse {
  status: "204";
}
