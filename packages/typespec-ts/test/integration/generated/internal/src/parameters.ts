// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { ModelOnlyUsedByInternalOperation } from "./models";

export interface GetInternalQueryParamProperties {
  name: string;
}

export interface GetInternalQueryParam {
  queryParameters: GetInternalQueryParamProperties;
}

export type GetInternalParameters = GetInternalQueryParam & RequestParameters;

export interface PostInternalBodyParam {
  body: ModelOnlyUsedByInternalOperation;
}

export type PostInternalParameters = PostInternalBodyParam & RequestParameters;
