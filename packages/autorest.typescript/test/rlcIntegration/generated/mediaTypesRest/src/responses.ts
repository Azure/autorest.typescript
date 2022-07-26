// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Analyze body, that could be different media types. */
export interface AnalyzeBody200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type. */
export interface AnalyzeBodyNoAcceptHeader202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
}

/** Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type. */
export interface AnalyzeBodyNoAcceptHeaderdefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Pass in contentType 'text/plain; charset=UTF-8' to pass test. Value for input does not matter */
export interface ContentTypeWithEncoding200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Binary body with two content types. Pass in of {'hello': 'world'} for the application/json content type, and a byte stream of 'hello, world!' for application/octet-stream. */
export interface BinaryBodyWithTwoContentTypes200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Binary body with three content types. Pass in string 'hello, world' with content type 'text/plain', {'hello': world'} with content type 'application/json' and a byte string for 'application/octet-stream'. */
export interface BinaryBodyWithThreeContentTypes200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** Body with three types. Can be stream, string, or JSON. Pass in string 'hello, world' with content type 'text/plain', {'hello': world'} with content type 'application/json' and a byte string for 'application/octet-stream'. */
export interface BodyThreeTypes200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Body that's either text/plain or application/json */
export interface PutTextAndJsonBody200Response extends HttpResponse {
  status: "200";
  body: string;
}
