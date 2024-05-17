// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { NewModel } from "./models.js";

export interface NewOpBodyParam {
  body: NewModel;
}

export interface NewOpQueryParamProperties {
  newQuery: string;
}

export interface NewOpQueryParam {
  queryParameters: NewOpQueryParamProperties;
}

export type NewOpParameters = NewOpQueryParam &
  NewOpBodyParam &
  RequestParameters;

export interface NewOpInNewInterfaceBodyParam {
  body: NewModel;
}

export type NewOpInNewInterfaceParameters = NewOpInNewInterfaceBodyParam &
  RequestParameters;
