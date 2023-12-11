// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Siamese } from "./models.js";

export interface PostValidBodyParam {
  body: Siamese;
}

export type PostValidParameters = PostValidBodyParam & RequestParameters;
export type GetValidParameters = RequestParameters;

export interface PutValidBodyParam {
  body: Siamese;
}

export type PutValidParameters = PutValidBodyParam & RequestParameters;
