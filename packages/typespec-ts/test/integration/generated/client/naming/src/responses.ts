// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface Operation204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Parameter204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyClient204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyLanguage204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyCompatibleWithEncodedName204Response
  extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderRequest204Response extends HttpResponse {
  status: "204";
}

export interface HeaderResponse204Headers {
  "default-name": string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderResponse204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & HeaderResponse204Headers;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelClient204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelLanguage204Response extends HttpResponse {
  status: "204";
}
