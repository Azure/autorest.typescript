// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeBodyParameters,
  ContentTypeWithEncodingParameters
} from "./parameters";
import {
  AnalyzeBody200Response,
  ContentTypeWithEncoding200Response
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface AnalyzeBody {
  /** Analyze body, that could be different media types. */
  post(
    options?: AnalyzeBodyParameters | AnalyzeBodyParameters
  ): Promise<AnalyzeBody200Response> | Promise<AnalyzeBody200Response>;
}

export interface ContentTypeWithEncoding {
  /** Pass in contentType 'text/plain; encoding=UTF-8' to pass test. Value for input does not matter */
  post(
    options?: ContentTypeWithEncodingParameters
  ): Promise<ContentTypeWithEncoding200Response>;
}

export interface Routes {
  /** Resource for '/mediatypes/analyze' has methods for the following verbs: post */
  (path: "/mediatypes/analyze"): AnalyzeBody;
  /** Resource for '/mediatypes/contentTypeWithEncoding' has methods for the following verbs: post */
  (path: "/mediatypes/contentTypeWithEncoding"): ContentTypeWithEncoding;
}

export type MediaTypesRestClient = Client & {
  path: Routes;
};

export default function MediaTypes(
  options: ClientOptions = {}
): MediaTypesRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as MediaTypesRestClient;
}
