// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface GetEmptyPathParameters {
  /** Account Name */
  accountName: string;
}

export interface GetEmptyPathParam {
  pathParameters: GetEmptyPathParameters;
}

export type GetEmptyParameters = GetEmptyPathParam & RequestParameters;
