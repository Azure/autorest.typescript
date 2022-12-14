// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetBinaryParameters,
  GetArrayParameters,
  CreateWithHeadersParameters,
  DeleteWithHeadersParameters,
} from "./parameters";
import {
  GetBinary200Response,
  GetArray200Response,
  CreateWithHeaders201Response,
  DeleteWithHeaders204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetBinary {
  get(options?: GetBinaryParameters): StreamableMethod<GetBinary200Response>;
}

export interface GetArray {
  get(options?: GetArrayParameters): StreamableMethod<GetArray200Response>;
}

export interface CreateWithHeaders {
  put(
    options?: CreateWithHeadersParameters
  ): StreamableMethod<CreateWithHeaders201Response>;
}

export interface DeleteWithHeaders {
  delete(
    options?: DeleteWithHeadersParameters
  ): StreamableMethod<DeleteWithHeaders204Response>;
}

export interface Routes {
  /** Resource for '/response/get-binary' has methods for the following verbs: get */
  (path: "/response/get-binary"): GetBinary;
  /** Resource for '/response' has methods for the following verbs: get */
  (path: "/response"): GetArray;
  /** Resource for '/response/create-with-headers' has methods for the following verbs: put */
  (path: "/response/create-with-headers"): CreateWithHeaders;
  /** Resource for '/response/delete-with-headers' has methods for the following verbs: delete */
  (path: "/response/delete-with-headers"): DeleteWithHeaders;
}

export type ResponseClient = Client & {
  path: Routes;
};
