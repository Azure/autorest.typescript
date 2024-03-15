// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { DaysOfWeekExtensibleEnumOutput } from "./outputModels";

/** The request has succeeded. */
export interface GetKnownValue200Response extends HttpResponse {
  status: "200";
  body: DaysOfWeekExtensibleEnumOutput;
}

/** The request has succeeded. */
export interface GetUnknownValue200Response extends HttpResponse {
  status: "200";
  body: DaysOfWeekExtensibleEnumOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutKnownValue204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutUnknownValue204Response extends HttpResponse {
  status: "204";
}
