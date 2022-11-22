// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { MessageOutput } from "./outputModels";

/** The request has succeeded. */
export interface HeadNoParams200Response extends HttpResponse {
  status: "200";
}

/** Answer from service */
export interface GetRequired200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface PutRequiredOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface PostParameters200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}

/** Answer from service */
export interface GetOptional200Response extends HttpResponse {
  status: "200";
  body: MessageOutput;
}
