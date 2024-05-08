// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DaysOfWeekEnum } from "./models.js";

export type GetKnownValueParameters = RequestParameters;

export interface PutKnownValueBodyParam {
  /** _ */
  body: DaysOfWeekEnum;
}

export type PutKnownValueParameters = PutKnownValueBodyParam &
  RequestParameters;

export interface PutUnknownValueBodyParam {
  /** _ */
  body: DaysOfWeekEnum;
}

export type PutUnknownValueParameters = PutUnknownValueBodyParam &
  RequestParameters;
