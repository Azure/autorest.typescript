// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { ListItemInputExtensibleEnum, ListItemInputBody } from "./models.js";

export type ListWithPageParameters = RequestParameters;

export interface ListWithParametersBodyParam {
  /** The body of the input. */
  body: ListItemInputBody;
}

export interface ListWithParametersQueryParamProperties {
  /** Another query parameter. */
  another?: ListItemInputExtensibleEnum;
}

export interface ListWithParametersQueryParam {
  queryParameters?: ListWithParametersQueryParamProperties;
}

export type ListWithParametersParameters = ListWithParametersQueryParam &
  ListWithParametersBodyParam &
  RequestParameters;
export type ListWithCustomPageModelParameters = RequestParameters;
export type ListFirstItemParameters = RequestParameters;
export type ListSecondItemParameters = RequestParameters;
