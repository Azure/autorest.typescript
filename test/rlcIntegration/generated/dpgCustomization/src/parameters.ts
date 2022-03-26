// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Input } from "./models";

export type GetModelParameters = RequestParameters;

export interface PostModelBodyParam {
  /** Please put {'hello': 'world!'} */
  body: Input;
}

export interface PostModelMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PostModelParameters = PostModelMediaTypesParam &
  PostModelBodyParam &
  RequestParameters;
export type GetPagesParameters = RequestParameters;
export type LroParameters = RequestParameters;
