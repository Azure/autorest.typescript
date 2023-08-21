// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Widget } from "./models.js";

export type GetParameters = RequestParameters;

export interface UpdateBodyParam {
  body: Widget;
}

export type UpdateParameters = UpdateBodyParam & RequestParameters;
export type DeleteParameters = RequestParameters;

export interface CreateBodyParam {
  body: Widget;
}

export type CreateParameters = CreateBodyParam & RequestParameters;
export type ListParameters = RequestParameters;
export type CustomGetParameters = RequestParameters;
export type CustomGet1Parameters = RequestParameters;
export type CustomGet2Parameters = RequestParameters;
export type CustomGet3Parameters = RequestParameters;
export type CustomGet4Parameters = RequestParameters;
export type CustomGet5Parameters = RequestParameters;
export type CustomGet6Parameters = RequestParameters;
export type CustomGet7Parameters = RequestParameters;
export type CustomGet8Parameters = RequestParameters;
export type CustomGet9Parameters = RequestParameters;
export type CustomGet10Parameters = RequestParameters;
export type CustomGet11Parameters = RequestParameters;
export type CustomGet12Parameters = RequestParameters;
export type CustomGet13Parameters = RequestParameters;
export type CustomGet14Parameters = RequestParameters;
export type CustomGet15Parameters = RequestParameters;
export type CustomGet16Parameters = RequestParameters;
