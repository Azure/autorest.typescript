// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  ProductListOutput,
  LroProductOutput,
} from "./outputModels";

/** Returns {'received': <mode>} */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Returns {'received': <mode>} */
export interface PostModel200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** The request has succeeded. */
export interface GetProtocolPages200Response extends HttpResponse {
  status: "200";
  body: ProductListOutput;
}

export interface GetProtocolPagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetProtocolPagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetProtocolPagesDefaultHeaders;
}

/** The request has succeeded. */
export interface GetConveniencePages200Response extends HttpResponse {
  status: "200";
  body: ProductListOutput;
}

export interface GetConveniencePagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetConveniencePagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetConveniencePagesDefaultHeaders;
}

/** Initial response with ProvisioningState='Succeeded' */
export interface Lro200Response extends HttpResponse {
  status: "200";
  body: LroProductOutput;
}
