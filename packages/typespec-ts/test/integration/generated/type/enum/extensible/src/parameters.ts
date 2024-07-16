// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DaysOfWeekExtensibleEnum } from "./models.js";

export type GetKnownValueParameters = RequestParameters;
export type GetUnknownValueParameters = RequestParameters;

export interface PutKnownValueBodyParam {
  /** Possible values: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" */
  body: DaysOfWeekExtensibleEnum;
}

export type PutKnownValueParameters = PutKnownValueBodyParam &
  RequestParameters;

export interface PutUnknownValueBodyParam {
  /** Possible values: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" */
  body: DaysOfWeekExtensibleEnum;
}

export type PutUnknownValueParameters = PutUnknownValueBodyParam &
  RequestParameters;
