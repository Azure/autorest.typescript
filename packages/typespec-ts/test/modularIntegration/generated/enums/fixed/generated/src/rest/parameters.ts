// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type GetKnownValueParameters = RequestParameters;

export interface PutKnownValueBodyParam {
  /** _ */
  body:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
}

export type PutKnownValueParameters = PutKnownValueBodyParam &
  RequestParameters;

export interface PutUnknownValueBodyParam {
  /** _ */
  body:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
}

export type PutUnknownValueParameters = PutUnknownValueBodyParam &
  RequestParameters;
