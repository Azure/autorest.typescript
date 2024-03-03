// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  JsonProjectedNameModel,
  ClientProjectedNameModel,
  LanguageProjectedNameModel,
  JsonAndClientProjectedNameModel,
  ModelWithClientProjectedName,
  ModelWithLanguageProjectedName,
} from "./models";

export type OperationParameters = RequestParameters;

export interface ParameterQueryParamProperties {
  "default-name": string;
}

export interface ParameterQueryParam {
  queryParameters: ParameterQueryParamProperties;
}

export type ParameterParameters = ParameterQueryParam & RequestParameters;

export interface PropertyJsonBodyParam {
  body?: JsonProjectedNameModel;
}

export type PropertyJsonParameters = PropertyJsonBodyParam & RequestParameters;

export interface PropertyClientBodyParam {
  body?: ClientProjectedNameModel;
}

export type PropertyClientParameters = PropertyClientBodyParam &
  RequestParameters;

export interface PropertyLanguageBodyParam {
  body?: LanguageProjectedNameModel;
}

export type PropertyLanguageParameters = PropertyLanguageBodyParam &
  RequestParameters;

export interface PropertyJsonAndClientBodyParam {
  body?: JsonAndClientProjectedNameModel;
}

export type PropertyJsonAndClientParameters = PropertyJsonAndClientBodyParam &
  RequestParameters;

export interface ModelClientBodyParam {
  body?: ModelWithClientProjectedName;
}

export type ModelClientParameters = ModelClientBodyParam & RequestParameters;

export interface ModelLanguageBodyParam {
  body?: ModelWithLanguageProjectedName;
}

export type ModelLanguageParameters = ModelLanguageBodyParam &
  RequestParameters;
