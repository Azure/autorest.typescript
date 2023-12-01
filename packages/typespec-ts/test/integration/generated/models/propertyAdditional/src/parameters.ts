// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ExtendsUnknownAdditionalProperties,
  IsUnknownAdditionalProperties,
  ExtendsStringAdditionalProperties,
  IsStringAdditionalProperties,
  ExtendsFloatAdditionalProperties,
  IsFloatAdditionalProperties,
  ExtendsModelAdditionalProperties,
  IsModelAdditionalProperties,
  ExtendsModelArrayAdditionalProperties,
  IsModelArrayAdditionalProperties,
} from "./models";

export type ExtendsUnknownGetParameters = RequestParameters;

export interface ExtendsUnknownPutBodyParam {
  /** body */
  body: ExtendsUnknownAdditionalProperties;
}

export type ExtendsUnknownPutParameters = ExtendsUnknownPutBodyParam &
  RequestParameters;
export type IsUnknownGetParameters = RequestParameters;

export interface IsUnknownPutBodyParam {
  /** body */
  body: IsUnknownAdditionalProperties;
}

export type IsUnknownPutParameters = IsUnknownPutBodyParam & RequestParameters;
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
