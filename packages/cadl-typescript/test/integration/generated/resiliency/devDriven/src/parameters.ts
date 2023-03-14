// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Input } from "./models";

export type GetModelParameters = RequestParameters;

export interface PostModelBodyParam {
  /** Please put {'hello': 'world!'} */
  body: Input;
}

export type PostModelParameters = PostModelBodyParam & RequestParameters;
export type GetProtocolPagesParameters = RequestParameters;
export type GetConveniencePagesParameters = RequestParameters;
export type LroParameters = RequestParameters;
