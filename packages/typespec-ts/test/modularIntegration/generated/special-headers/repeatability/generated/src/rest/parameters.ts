// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface ImmediateSuccessHeaders {
  "Repeatability-Request-ID": string;
  "Repeatability-First-Sent": string;
}

export interface ImmediateSuccessHeaderParam {
  headers: RawHttpHeadersInput & ImmediateSuccessHeaders;
}

export type ImmediateSuccessParameters = ImmediateSuccessHeaderParam &
  RequestParameters;
