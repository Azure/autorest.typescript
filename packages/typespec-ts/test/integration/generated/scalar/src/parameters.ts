// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type StringModelGetParameters = RequestParameters;

export interface StringModelPutBodyParam {
  /** _ */
  body: string;
}

export type StringModelPutParameters = StringModelPutBodyParam &
  RequestParameters;
export type BooleanModelGetParameters = RequestParameters;

export interface BooleanModelPutBodyParam {
  /** _ */
  body: boolean;
}

export type BooleanModelPutParameters = BooleanModelPutBodyParam &
  RequestParameters;
export type UnknownGetParameters = RequestParameters;

export interface UnknownPutBodyParam {
  /** _ */
  body: unknown;
}

export type UnknownPutParameters = UnknownPutBodyParam & RequestParameters;
