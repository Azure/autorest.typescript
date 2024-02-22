// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  JsonEncodedNameModel,
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
  ModelWithClientClientName,
  ModelWithLanguageClientName,
} from "./models.js";

export type OperationParameters = RequestParameters;

export interface ParameterQueryParamProperties {
  defaultName: string;
}

export interface ParameterQueryParam {
  queryParameters: ParameterQueryParamProperties;
}

export type ParameterParameters = ParameterQueryParam & RequestParameters;

export interface HeaderHeaders {
  "default-name": string;
}

export interface HeaderHeaderParam {
  headers: RawHttpHeadersInput & HeaderHeaders;
}

export type HeaderParameters = HeaderHeaderParam & RequestParameters;

export interface PropertyJsonBodyParam {
  body?: JsonEncodedNameModel;
}

export type PropertyJsonParameters = PropertyJsonBodyParam & RequestParameters;

export interface PropertyClientBodyParam {
  body?: ClientNameModel;
}

export type PropertyClientParameters = PropertyClientBodyParam &
  RequestParameters;

export interface PropertyLanguageBodyParam {
  body?: LanguageClientNameModel;
}

export type PropertyLanguageParameters = PropertyLanguageBodyParam &
  RequestParameters;

export interface PropertyJsonAndClientBodyParam {
  body?: ClientNameAndJsonEncodedNameModel;
}

export type PropertyJsonAndClientParameters = PropertyJsonAndClientBodyParam &
  RequestParameters;

export interface ModelClientBodyParam {
  body?: ModelWithClientClientName;
}

export type ModelClientParameters = ModelClientBodyParam & RequestParameters;

export interface ModelLanguageBodyParam {
  body?: ModelWithLanguageClientName;
}

export type ModelLanguageParameters = ModelLanguageBodyParam &
  RequestParameters;
