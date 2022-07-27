// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Widget } from "./models";

export type ListParameters = RequestParameters;

export interface CreateBodyParam {
  body?: Widget;
}

export interface CreateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type CreateParameters = CreateMediaTypesParam &
  CreateBodyParam &
  RequestParameters;
export type ReadParameters = RequestParameters;
export type CustomGetParameters = RequestParameters;
