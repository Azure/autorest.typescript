// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Bird } from "./models.js";

export type GetModelParameters = RequestParameters;

export interface PutModelBodyParam {
  body: Bird;
}

export type PutModelParameters = PutModelBodyParam & RequestParameters;
export type GetRecursiveModelParameters = RequestParameters;

export interface PutRecursiveModelBodyParam {
  body: Bird;
}

export type PutRecursiveModelParameters = PutRecursiveModelBodyParam &
  RequestParameters;
export type GetMissingDiscriminatorParameters = RequestParameters;
export type GetWrongDiscriminatorParameters = RequestParameters;
export type GetLegacyModelParameters = RequestParameters;
