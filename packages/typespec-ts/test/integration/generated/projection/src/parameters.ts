// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Project } from "./models";

export interface JsonProjectionBodyParam {
  body?: Project;
}

export type JsonProjectionParameters = JsonProjectionBodyParam &
  RequestParameters;

export interface ClientProjectionBodyParam {
  body?: Project;
}

export type ClientProjectionParameters = ClientProjectionBodyParam &
  RequestParameters;

export interface LanguageProjectionBodyParam {
  body?: Project;
}

export type LanguageProjectionParameters = LanguageProjectionBodyParam &
  RequestParameters;
