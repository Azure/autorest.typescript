// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetRequiredParameters,
  PostParametersParameters,
  DeleteParametersParameters,
  GetNewOperationParameters
} from "./parameters";
import {
  GetRequired200Response,
  PostParameters200Response,
  DeleteParameters204Response,
  GetNewOperation200Response
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /** Get true Boolean value on path */
  getRequired(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** POST a JSON or a JPEG */
  postParameters(
    options: PostParametersParameters | PostParametersParameters
  ): Promise<PostParameters200Response> | Promise<PostParameters200Response>;
  /** Delete something */
  deleteParameters(
    options?: DeleteParametersParameters
  ): Promise<DeleteParameters204Response>;
  /** I'm a new operation */
  getNewOperation(
    options?: GetNewOperationParameters
  ): Promise<GetNewOperation200Response>;
}

export interface GetRequired {
  /** Get true Boolean value on path */
  get(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** POST a JSON or a JPEG */
  post(
    options: PostParametersParameters | PostParametersParameters
  ): Promise<PostParameters200Response> | Promise<PostParameters200Response>;
  /** Delete something */
  delete(
    options?: DeleteParametersParameters
  ): Promise<DeleteParameters204Response>;
}

export interface GetNewOperation {
  /** I'm a new operation */
  get(options?: GetNewOperationParameters): Promise<GetNewOperation200Response>;
}

export interface Routes {
  /** Resource for '/servicedriven/parameters' has methods for the following verbs: get, post, delete */
  (path: "/servicedriven/parameters"): GetRequired;
  /** Resource for '/servicedriven/newpath' has methods for the following verbs: get */
  (path: "/servicedriven/newpath"): GetNewOperation;
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
      },
      deleteParameters: (options) => {
        return client.path("/servicedriven/parameters").delete(options);
      },
      getNewOperation: (options) => {
        return client.path("/servicedriven/newpath").get(options);
      }
    }
  };
}
