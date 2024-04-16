// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ExtendsUnknownAdditionalProperties,
  ExtendsUnknownAdditionalPropertiesDerived,
  ExtendsUnknownAdditionalPropertiesDiscriminated,
  IsUnknownAdditionalProperties,
  IsUnknownAdditionalPropertiesDerived,
  IsUnknownAdditionalPropertiesDiscriminated,
  ExtendsStringAdditionalProperties,
  IsStringAdditionalProperties,
  SpreadStringRecord,
  ExtendsFloatAdditionalProperties,
  IsFloatAdditionalProperties,
  SpreadFloatRecord,
  ExtendsModelAdditionalProperties,
  IsModelAdditionalProperties,
  SpreadModelRecord,
  ExtendsModelArrayAdditionalProperties,
  IsModelArrayAdditionalProperties,
  SpreadModelArrayRecord,
  DifferentSpreadStringRecord,
  DifferentSpreadFloatRecord,
  DifferentSpreadModelRecord,
  DifferentSpreadModelArrayRecord,
  DifferentSpreadStringDerived,
  DifferentSpreadFloatDerived,
  DifferentSpreadModelDerived,
  DifferentSpreadModelArrayDerived,
  MultipleSpreadRecord,
  SpreadRecordForUnion,
  SpreadRecordForDiscriminatedUnion,
  SpreadRecordForNonDiscriminatedUnion,
  SpreadRecordForNonDiscriminatedUnion2,
  SpreadRecordForNonDiscriminatedUnion3,
} from "./models.js";

export type ExtendsUnknownGetParameters = RequestParameters;

export interface ExtendsUnknownPutBodyParam {
  /** body */
  body: ExtendsUnknownAdditionalProperties;
}

export type ExtendsUnknownPutParameters = ExtendsUnknownPutBodyParam &
  RequestParameters;
export type ExtendsUnknownDerivedGetParameters = RequestParameters;

export interface ExtendsUnknownDerivedPutBodyParam {
  /** body */
  body: ExtendsUnknownAdditionalPropertiesDerived;
}

export type ExtendsUnknownDerivedPutParameters =
  ExtendsUnknownDerivedPutBodyParam & RequestParameters;
export type ExtendsUnknownDiscriminatedGetParameters = RequestParameters;

export interface ExtendsUnknownDiscriminatedPutBodyParam {
  /** body */
  body: ExtendsUnknownAdditionalPropertiesDiscriminated;
}

export type ExtendsUnknownDiscriminatedPutParameters =
  ExtendsUnknownDiscriminatedPutBodyParam & RequestParameters;
export type IsUnknownGetParameters = RequestParameters;

export interface IsUnknownPutBodyParam {
  /** body */
  body: IsUnknownAdditionalProperties;
}

export type IsUnknownPutParameters = IsUnknownPutBodyParam & RequestParameters;
export type IsUnknownDerivedGetParameters = RequestParameters;

export interface IsUnknownDerivedPutBodyParam {
  /** body */
  body: IsUnknownAdditionalPropertiesDerived;
}

export type IsUnknownDerivedPutParameters = IsUnknownDerivedPutBodyParam &
  RequestParameters;
export type IsUnknownDiscriminatedGetParameters = RequestParameters;

export interface IsUnknownDiscriminatedPutBodyParam {
  /** body */
  body: IsUnknownAdditionalPropertiesDiscriminated;
}

export type IsUnknownDiscriminatedPutParameters =
  IsUnknownDiscriminatedPutBodyParam & RequestParameters;
export type ExtendsStringGetParameters = RequestParameters;

export interface ExtendsStringPutBodyParam {
  /** body */
  body: ExtendsStringAdditionalProperties;
}

export type ExtendsStringPutParameters = ExtendsStringPutBodyParam &
  RequestParameters;
export type IsStringGetParameters = RequestParameters;

export interface IsStringPutBodyParam {
  /** body */
  body: IsStringAdditionalProperties;
}

export type IsStringPutParameters = IsStringPutBodyParam & RequestParameters;
export type SpreadStringGetParameters = RequestParameters;

export interface SpreadStringPutBodyParam {
  /** body */
  body: SpreadStringRecord;
}

export type SpreadStringPutParameters = SpreadStringPutBodyParam &
  RequestParameters;
export type ExtendsFloatGetParameters = RequestParameters;

export interface ExtendsFloatPutBodyParam {
  /** body */
  body: ExtendsFloatAdditionalProperties;
}

export type ExtendsFloatPutParameters = ExtendsFloatPutBodyParam &
  RequestParameters;
export type IsFloatGetParameters = RequestParameters;

export interface IsFloatPutBodyParam {
  /** body */
  body: IsFloatAdditionalProperties;
}

export type IsFloatPutParameters = IsFloatPutBodyParam & RequestParameters;
export type SpreadFloatGetParameters = RequestParameters;

export interface SpreadFloatPutBodyParam {
  /** body */
  body: SpreadFloatRecord;
}

export type SpreadFloatPutParameters = SpreadFloatPutBodyParam &
  RequestParameters;
export type ExtendsModelGetParameters = RequestParameters;

export interface ExtendsModelPutBodyParam {
  /** body */
  body: ExtendsModelAdditionalProperties;
}

export type ExtendsModelPutParameters = ExtendsModelPutBodyParam &
  RequestParameters;
export type IsModelGetParameters = RequestParameters;

export interface IsModelPutBodyParam {
  /** body */
  body: IsModelAdditionalProperties;
}

export type IsModelPutParameters = IsModelPutBodyParam & RequestParameters;
export type SpreadModelGetParameters = RequestParameters;

export interface SpreadModelPutBodyParam {
  /** body */
  body: SpreadModelRecord;
}

export type SpreadModelPutParameters = SpreadModelPutBodyParam &
  RequestParameters;
export type ExtendsModelArrayGetParameters = RequestParameters;

export interface ExtendsModelArrayPutBodyParam {
  /** body */
  body: ExtendsModelArrayAdditionalProperties;
}

export type ExtendsModelArrayPutParameters = ExtendsModelArrayPutBodyParam &
  RequestParameters;
export type IsModelArrayGetParameters = RequestParameters;

export interface IsModelArrayPutBodyParam {
  /** body */
  body: IsModelArrayAdditionalProperties;
}

export type IsModelArrayPutParameters = IsModelArrayPutBodyParam &
  RequestParameters;
export type SpreadModelArrayGetParameters = RequestParameters;

export interface SpreadModelArrayPutBodyParam {
  /** body */
  body: SpreadModelArrayRecord;
}

export type SpreadModelArrayPutParameters = SpreadModelArrayPutBodyParam &
  RequestParameters;
export type SpreadDifferentStringGetParameters = RequestParameters;

export interface SpreadDifferentStringPutBodyParam {
  /** body */
  body: DifferentSpreadStringRecord;
}

export type SpreadDifferentStringPutParameters =
  SpreadDifferentStringPutBodyParam & RequestParameters;
export type SpreadDifferentFloatGetParameters = RequestParameters;

export interface SpreadDifferentFloatPutBodyParam {
  /** body */
  body: DifferentSpreadFloatRecord;
}

export type SpreadDifferentFloatPutParameters =
  SpreadDifferentFloatPutBodyParam & RequestParameters;
export type SpreadDifferentModelGetParameters = RequestParameters;

export interface SpreadDifferentModelPutBodyParam {
  /** body */
  body: DifferentSpreadModelRecord;
}

export type SpreadDifferentModelPutParameters =
  SpreadDifferentModelPutBodyParam & RequestParameters;
export type SpreadDifferentModelArrayGetParameters = RequestParameters;

export interface SpreadDifferentModelArrayPutBodyParam {
  /** body */
  body: DifferentSpreadModelArrayRecord;
}

export type SpreadDifferentModelArrayPutParameters =
  SpreadDifferentModelArrayPutBodyParam & RequestParameters;
export type ExtendsDifferentSpreadStringGetParameters = RequestParameters;

export interface ExtendsDifferentSpreadStringPutBodyParam {
  /** body */
  body: DifferentSpreadStringDerived;
}

export type ExtendsDifferentSpreadStringPutParameters =
  ExtendsDifferentSpreadStringPutBodyParam & RequestParameters;
export type ExtendsDifferentSpreadFloatGetParameters = RequestParameters;

export interface ExtendsDifferentSpreadFloatPutBodyParam {
  /** body */
  body: DifferentSpreadFloatDerived;
}

export type ExtendsDifferentSpreadFloatPutParameters =
  ExtendsDifferentSpreadFloatPutBodyParam & RequestParameters;
export type ExtendsDifferentSpreadModelGetParameters = RequestParameters;

export interface ExtendsDifferentSpreadModelPutBodyParam {
  /** body */
  body: DifferentSpreadModelDerived;
}

export type ExtendsDifferentSpreadModelPutParameters =
  ExtendsDifferentSpreadModelPutBodyParam & RequestParameters;
export type ExtendsDifferentSpreadModelArrayGetParameters = RequestParameters;

export interface ExtendsDifferentSpreadModelArrayPutBodyParam {
  /** body */
  body: DifferentSpreadModelArrayDerived;
}

export type ExtendsDifferentSpreadModelArrayPutParameters =
  ExtendsDifferentSpreadModelArrayPutBodyParam & RequestParameters;
export type MultipleSpreadGetParameters = RequestParameters;

export interface MultipleSpreadPutBodyParam {
  /** body */
  body: MultipleSpreadRecord;
}

export type MultipleSpreadPutParameters = MultipleSpreadPutBodyParam &
  RequestParameters;
export type SpreadRecordUnionGetParameters = RequestParameters;

export interface SpreadRecordUnionPutBodyParam {
  /** body */
  body: SpreadRecordForUnion;
}

export type SpreadRecordUnionPutParameters = SpreadRecordUnionPutBodyParam &
  RequestParameters;
export type SpreadRecordDiscriminatedUnionGetParameters = RequestParameters;

export interface SpreadRecordDiscriminatedUnionPutBodyParam {
  /** body */
  body: SpreadRecordForDiscriminatedUnion;
}

export type SpreadRecordDiscriminatedUnionPutParameters =
  SpreadRecordDiscriminatedUnionPutBodyParam & RequestParameters;
export type SpreadRecordNonDiscriminatedUnionGetParameters = RequestParameters;

export interface SpreadRecordNonDiscriminatedUnionPutBodyParam {
  /** body */
  body: SpreadRecordForNonDiscriminatedUnion;
}

export type SpreadRecordNonDiscriminatedUnionPutParameters =
  SpreadRecordNonDiscriminatedUnionPutBodyParam & RequestParameters;
export type SpreadRecordNonDiscriminatedUnion2GetParameters = RequestParameters;

export interface SpreadRecordNonDiscriminatedUnion2PutBodyParam {
  /** body */
  body: SpreadRecordForNonDiscriminatedUnion2;
}

export type SpreadRecordNonDiscriminatedUnion2PutParameters =
  SpreadRecordNonDiscriminatedUnion2PutBodyParam & RequestParameters;
export type SpreadRecordNonDiscriminatedUnion3GetParameters = RequestParameters;

export interface SpreadRecordNonDiscriminatedUnion3PutBodyParam {
  /** body */
  body: SpreadRecordForNonDiscriminatedUnion3;
}

export type SpreadRecordNonDiscriminatedUnion3PutParameters =
  SpreadRecordNonDiscriminatedUnion3PutBodyParam & RequestParameters;
