// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { BodyModel } from "./models";

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

export interface OptionalExplicitSetModelBodyParam {
  body?: BodyModel;
}

export type OptionalExplicitSetModelParameters =
  OptionalExplicitSetModelBodyParam & RequestParameters;

export interface OptionalExplicitOmitBodyParam {
  body?: BodyModel;
}

export type OptionalExplicitOmitParameters = OptionalExplicitOmitBodyParam &
  RequestParameters;
