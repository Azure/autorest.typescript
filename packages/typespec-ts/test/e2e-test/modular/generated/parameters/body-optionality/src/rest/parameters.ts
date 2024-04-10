// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { BodyModel } from "./models.js";

export interface RequiredExplicitBodyParam {
  body: BodyModel;
}

export type RequiredExplicitParameters = RequiredExplicitBodyParam &
  RequestParameters;

export interface RequiredImplicitBodyParam {
  body?: BodyModel;
}

export type RequiredImplicitParameters = RequiredImplicitBodyParam &
  RequestParameters;

export interface SetModelBodyParam {
  body?: BodyModel;
}

export type SetModelParameters = SetModelBodyParam & RequestParameters;

export interface OmitBodyParam {
  body?: BodyModel;
}

export type OmitParameters = OmitBodyParam & RequestParameters;
