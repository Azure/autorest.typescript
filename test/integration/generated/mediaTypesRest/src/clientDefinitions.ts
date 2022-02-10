// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeBodyParameters,
  AnalyzeBodyNoAcceptHeaderParameters,
  ContentTypeWithEncodingParameters,
  BinaryBodyWithTwoContentTypesParameters,
  BinaryBodyWithThreeContentTypesParameters,
  PutTextAndJsonBodyParameters
} from "./parameters";
import {
  AnalyzeBody200Response,
  AnalyzeBodyNoAcceptHeader202Response,
  AnalyzeBodyNoAcceptHeaderdefaultResponse,
  ContentTypeWithEncoding200Response,
  BinaryBodyWithTwoContentTypes200Response,
  BinaryBodyWithThreeContentTypes200Response,
  PutTextAndJsonBody200Response
} from "./responses";
import { Client } from "@azure-rest/core-client";

export interface AnalyzeBody {
  /** Analyze body, that could be different media types. */
  post(
    options?: AnalyzeBodyParameters | AnalyzeBodyParameters
  ): Promise<AnalyzeBody200Response> | Promise<AnalyzeBody200Response>;
}

export interface AnalyzeBodyNoAcceptHeader {
  /** Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type. */
  post(
    options?:
      | AnalyzeBodyNoAcceptHeaderParameters
      | AnalyzeBodyNoAcceptHeaderParameters
  ):
    | Promise<
        | AnalyzeBodyNoAcceptHeader202Response
        | AnalyzeBodyNoAcceptHeaderdefaultResponse
      >
    | Promise<
        | AnalyzeBodyNoAcceptHeader202Response
        | AnalyzeBodyNoAcceptHeaderdefaultResponse
      >;
}

export interface ContentTypeWithEncoding {
  /** Pass in contentType 'text/plain; encoding=UTF-8' to pass test. Value for input does not matter */
  post(
    options?: ContentTypeWithEncodingParameters
  ): Promise<ContentTypeWithEncoding200Response>;
}

export interface BinaryBodyWithTwoContentTypes {
  /** Binary body with two content types. Pass in of {'hello': 'world'} for the application/json content type, and a byte stream of 'hello, world!' for application/octet-stream. */
  post(
    options: BinaryBodyWithTwoContentTypesParameters
  ): Promise<BinaryBodyWithTwoContentTypes200Response>;
}

export interface BinaryBodyWithThreeContentTypes {
  /** Binary body with three content types. Pass in string 'hello, world' with content type 'text/plain', {'hello': world'} with content type 'application/json' and a byte string for 'application/octet-stream'. */
  post(
    options:
      | BinaryBodyWithThreeContentTypesParameters
      | BinaryBodyWithThreeContentTypesParameters
  ):
    | Promise<BinaryBodyWithThreeContentTypes200Response>
    | Promise<BinaryBodyWithThreeContentTypes200Response>;
}

export interface PutTextAndJsonBody {
  /** Body that's either text/plain or application/json */
  post(
    options: PutTextAndJsonBodyParameters | PutTextAndJsonBodyParameters
  ):
    | Promise<PutTextAndJsonBody200Response>
    | Promise<PutTextAndJsonBody200Response>;
}

export interface Routes {
  /** Resource for '/mediatypes/analyze' has methods for the following verbs: post */
  (path: "/mediatypes/analyze"): AnalyzeBody;
  /** Resource for '/mediatypes/analyzeNoAccept' has methods for the following verbs: post */
  (path: "/mediatypes/analyzeNoAccept"): AnalyzeBodyNoAcceptHeader;
  /** Resource for '/mediatypes/contentTypeWithEncoding' has methods for the following verbs: post */
  (path: "/mediatypes/contentTypeWithEncoding"): ContentTypeWithEncoding;
  /** Resource for '/mediatypes/binaryBodyTwoContentTypes' has methods for the following verbs: post */
  (
    path: "/mediatypes/binaryBodyTwoContentTypes"
  ): BinaryBodyWithTwoContentTypes;
  /** Resource for '/mediatypes/binaryBodyThreeContentTypes' has methods for the following verbs: post */
  (
    path: "/mediatypes/binaryBodyThreeContentTypes"
  ): BinaryBodyWithThreeContentTypes;
  /** Resource for '/mediatypes/textAndJson' has methods for the following verbs: post */
  (path: "/mediatypes/textAndJson"): PutTextAndJsonBody;
}

export type MediaTypesRestClient = Client & {
  path: Routes;
};
