// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  RequestRegisterCCOutput,
  RequestRegisterVAOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface RequestUnionBody200Response extends HttpResponse {
  status: "200";
  body: Record<string, any>;
}

export interface RequestUnionBodyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ResponseUnionBody200Response extends HttpResponse {
  status: "200";
  body: RequestRegisterCCOutput | RequestRegisterVAOutput;
}

export interface ResponseUnionBodyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
