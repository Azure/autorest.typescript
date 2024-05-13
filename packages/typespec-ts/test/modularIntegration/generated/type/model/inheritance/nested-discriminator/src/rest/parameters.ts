// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Fish } from "./models.js";

export type GetModelParameters = RequestParameters;

export interface PutModelBodyParam {
  body: Fish;
}

export type PutModelParameters = PutModelBodyParam & RequestParameters;
export type GetRecursiveModelParameters = RequestParameters;

export interface PutRecursiveModelBodyParam {
  body: Fish;
}

export type PutRecursiveModelParameters = PutRecursiveModelBodyParam &
  RequestParameters;
export type GetMissingDiscriminatorParameters = RequestParameters;
export type GetWrongDiscriminatorParameters = RequestParameters;
