// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface ListQueryParamProperties {
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListQueryParam {
  queryParameters?: ListQueryParamProperties;
}

export type ListParameters = ListQueryParam & RequestParameters;
