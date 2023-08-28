// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";

export interface ImmediateSuccess204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ImmediateSuccess204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ImmediateSuccess204Headers;
}
