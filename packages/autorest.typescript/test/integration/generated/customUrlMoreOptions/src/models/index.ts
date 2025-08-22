// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface PathsGetEmptyOptionalParams
  extends coreClient.OperationOptions {
  /** The key version. Default value 'v1'. */
  keyVersion?: string;
}

/** Optional parameters. */
export interface CustomUrlMoreOptionsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** A string value that is used as a global part of the parameterized host. Default value 'host'. */
  dnsSuffix?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
