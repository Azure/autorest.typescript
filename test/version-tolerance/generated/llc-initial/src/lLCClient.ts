// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetRequiredParameters, PostParametersParameters } from "./parameters";
import { GetRequired200Response, PostParameters200Response } from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /** Get true Boolean value on path */
  getRequired(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** POST a JSON */
  postParameters(
    options: PostParametersParameters
  ): Promise<PostParameters200Response>;
}

export interface GetRequired {
  /** Get true Boolean value on path */
  get(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** POST a JSON */
  post(options: PostParametersParameters): Promise<PostParameters200Response>;
}

export interface Routes {
  /** Resource for '/servicedriven/parameters' has methods for the following verbs: get, post */
  (path: "/servicedriven/parameters"): GetRequired;
}

export type LLCClientRestClient = Client & {
  path: Routes;
  params: ParamsOperations;
};

export default function LLCClient(
  options: ClientOptions = {}
): LLCClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as LLCClientRestClient;

  return {
    ...client,
    params: {
      getRequired: (options) => {
        return client.path("/servicedriven/parameters").get(options);
      },
      postParameters: (options) => {
        return client.path("/servicedriven/parameters").post(options);
      }
    }
  };
}
