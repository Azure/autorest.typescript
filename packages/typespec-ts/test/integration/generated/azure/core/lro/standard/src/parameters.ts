// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { User } from "./models.js";

export interface CreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export type CreateOrReplaceParameters = CreateOrReplaceBodyParam &
  RequestParameters;
export type DeleteParameters = RequestParameters;

export interface ExportQueryParamProperties {
  /** The format of the data. */
  format: string;
}

export interface ExportQueryParam {
  queryParameters: ExportQueryParamProperties;
}

export type ExportParameters = ExportQueryParam & RequestParameters;
