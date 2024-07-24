// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { VisibilityModel, ReadOnlyModel } from "./models.js";

export interface GetModelBodyParam {
  body: VisibilityModel;
}

export type GetModelParameters = GetModelBodyParam & RequestParameters;

export interface HeadModelBodyParam {
  body: VisibilityModel;
}

export type HeadModelParameters = HeadModelBodyParam & RequestParameters;

export interface PutModelBodyParam {
  body: VisibilityModel;
}

export type PutModelParameters = PutModelBodyParam & RequestParameters;

export interface PatchModelBodyParam {
  body: VisibilityModel;
}

export type PatchModelParameters = PatchModelBodyParam & RequestParameters;

export interface PostModelBodyParam {
  body: VisibilityModel;
}

export type PostModelParameters = PostModelBodyParam & RequestParameters;

export interface DeleteModelBodyParam {
  body: VisibilityModel;
}

export type DeleteModelParameters = DeleteModelBodyParam & RequestParameters;

export interface PutReadOnlyModelBodyParam {
  body: ReadOnlyModel;
}

export type PutReadOnlyModelParameters = PutReadOnlyModelBodyParam &
  RequestParameters;
