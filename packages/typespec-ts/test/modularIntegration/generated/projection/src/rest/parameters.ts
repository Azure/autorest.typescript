// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  JsonProjectedNameModel,
  ClientProjectedNameModel,
  LanguageProjectedNameModel,
  JsonAndClientProjectedNameModel,
} from "./models.js";

export interface JsonBodyParam {
  body?: JsonProjectedNameModel;
}

export type JsonParameters = JsonBodyParam & RequestParameters;

export interface ClientBodyParam {
  body?: ClientProjectedNameModel;
}

export type ClientParameters = ClientBodyParam & RequestParameters;

export interface LanguageBodyParam {
  body?: LanguageProjectedNameModel;
}

export type LanguageParameters = LanguageBodyParam & RequestParameters;

export interface JsonAndClientBodyParam {
  body?: JsonAndClientProjectedNameModel;
}

export type JsonAndClientParameters = JsonAndClientBodyParam &
  RequestParameters;
export type OperationParameters = RequestParameters;

export interface ParameterQueryParamProperties {
  "default-name": string;
}

export interface ParameterQueryParam {
  queryParameters: ParameterQueryParamProperties;
}

export type ParameterParameters = ParameterQueryParam & RequestParameters;
