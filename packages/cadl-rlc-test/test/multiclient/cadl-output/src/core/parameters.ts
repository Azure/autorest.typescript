// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Resource } from "./models";

export interface CreateOrUpdateBodyParam {
  body?: Resource;
}

export type CreateOrUpdateParameters = CreateOrUpdateBodyParam &
  RequestParameters;
export type GetParameters = RequestParameters;
export type DeleteParameters = RequestParameters;
export type ListParameters = RequestParameters;
