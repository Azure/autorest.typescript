// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { AzureEmbeddingModel } from "./models.js";

export type GetParameters = RequestParameters;

export interface PutBodyParam {
  /** _ */
  body: number[];
}

export type PutParameters = PutBodyParam & RequestParameters;

export interface PostBodyParam {
  /** _ */
  body: AzureEmbeddingModel;
}

export type PostParameters = PostBodyParam & RequestParameters;
