// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DaysOfWeekExtensibleEnum } from "./models";

export type GetKnownValueParameters = RequestParameters;
export type GetUnknownValueParameters = RequestParameters;

export interface PutKnownValueBodyParam {
  body: DaysOfWeekExtensibleEnum;
}

export type PutKnownValueParameters = PutKnownValueBodyParam &
  RequestParameters;

export interface PutUnknownValueBodyParam {
  body: DaysOfWeekExtensibleEnum;
}

export type PutUnknownValueParameters = PutUnknownValueBodyParam &
  RequestParameters;
