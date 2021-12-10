// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetEmptyParameters } from "./parameters";
import { GetEmpty200Response, GetEmptydefaultResponse } from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

/** Contains operations for Paths operations */
export interface PathsOperations {
  /** Get a 200 to test a valid base uri */
  getEmpty(
    accountName: string,
    options?: GetEmptyParameters
  ): Promise<GetEmpty200Response | GetEmptydefaultResponse>;
}

export interface GetEmpty {
  /** Get a 200 to test a valid base uri */
  get(
    options?: GetEmptyParameters
  ): Promise<GetEmpty200Response | GetEmptydefaultResponse>;
}

export interface Routes {
  /** Resource for '/customuri' has methods for the following verbs: get */
  (path: "/customuri", accountName: string): GetEmpty;
}

export type CustomUrlRestClientRestClient = Client & {
  path: Routes;
  paths: PathsOperations;
};

export default function CustomUrlRestClient(
  host: string,
  options: ClientOptions = {}
): CustomUrlRestClientRestClient {
  const baseUrl = options.baseUrl ?? `http://{accountName}${host}`;
  const client = getClient(baseUrl, options) as CustomUrlRestClientRestClient;

  return {
    ...client,
    paths: {
      getEmpty: (accountName, options) => {
        return client.path("/customuri", accountName).get(options);
      }
    }
  };
}
