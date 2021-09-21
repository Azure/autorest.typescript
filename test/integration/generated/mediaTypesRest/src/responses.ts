// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Analyze body, that could be different media types. */
export interface AnalyzeBody200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Pass in contentType 'text/plain; encoding=UTF-8' to pass test. Value for input does not matter */
export interface ContentTypeWithEncoding200Response extends HttpResponse {
  status: "200";
  body: string;
}
