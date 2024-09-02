// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";

export interface PathsGetEmptyPathParameters {
  /** Account Name */
  accountName: string;
}

export interface PathsGetEmptyPathParam {
  pathParameters: PathsGetEmptyPathParameters;
}

export type PathsGetEmptyParameters = PathsGetEmptyPathParam &
  RequestParameters;
