// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { MessageResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface TestMulti200Response extends HttpResponse {
  status: "200";
  body: MessageResponseOutput;
}

/** The request has succeeded. */
export interface TestCsv200Response extends HttpResponse {
  status: "200";
  body: MessageResponseOutput;
}

/** The request has succeeded. */
export interface TestCsvHeader200Response extends HttpResponse {
  status: "200";
  body: MessageResponseOutput;
}

/** The request has succeeded. */
export interface TestDefaultHeader200Response extends HttpResponse {
  status: "200";
  body: MessageResponseOutput;
}
