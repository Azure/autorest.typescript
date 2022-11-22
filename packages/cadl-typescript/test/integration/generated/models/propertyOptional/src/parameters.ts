// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StringProperty,
  BytesProperty,
  DatetimeProperty,
  DurationProperty,
  CollectionsByteProperty,
  CollectionsModelProperty,
  RequiredAndOptionalProperty,
} from "./models";

export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: StringProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: StringProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: BytesProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: BytesProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: DatetimeProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: DatetimeProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: DurationProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: DurationProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: CollectionsByteProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: CollectionsByteProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetDefaultParameters = RequestParameters;

export interface PutAllBodyParam {
  body: CollectionsModelProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutDefaultBodyParam {
  body: CollectionsModelProperty;
}

export type PutDefaultParameters = PutDefaultBodyParam & RequestParameters;
export type GetAllParameters = RequestParameters;
export type GetRequiredOnlyParameters = RequestParameters;

export interface PutAllBodyParam {
  body: RequiredAndOptionalProperty;
}

export type PutAllParameters = PutAllBodyParam & RequestParameters;

export interface PutRequiredOnlyBodyParam {
  body: RequiredAndOptionalProperty;
}

export type PutRequiredOnlyParameters = PutRequiredOnlyBodyParam &
  RequestParameters;
