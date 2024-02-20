// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { WidgetUpdate, WidgetCreate } from "./models";

export type GetParameters = RequestParameters;

export interface UpdateBodyParam {
  body: WidgetUpdate;
}

export type UpdateParameters = UpdateBodyParam & RequestParameters;
export type DeleteParameters = RequestParameters;

export interface CreateBodyParam {
  body: WidgetCreate;
}

export type CreateParameters = CreateBodyParam & RequestParameters;
export type ListParameters = RequestParameters;
