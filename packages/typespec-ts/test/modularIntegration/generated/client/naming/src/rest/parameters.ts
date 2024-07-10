// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
  ModelWithClientClientName,
  ModelWithLanguageClientName,
  ServerExtensibleEnum,
  ExtensibleEnum,
} from "./models.js";

export type OperationParameters = RequestParameters;

export interface ParameterQueryParamProperties {
  defaultName: string;
}

export interface ParameterQueryParam {
  queryParameters: ParameterQueryParamProperties;
}

export type ParameterParameters = ParameterQueryParam & RequestParameters;

export interface PropertyClientBodyParam {
  body: ClientNameModel;
}

export type PropertyClientParameters = PropertyClientBodyParam &
  RequestParameters;

export interface PropertyLanguageBodyParam {
  body: LanguageClientNameModel;
}

export type PropertyLanguageParameters = PropertyLanguageBodyParam &
  RequestParameters;

export interface PropertyCompatibleWithEncodedNameBodyParam {
  body: ClientNameAndJsonEncodedNameModel;
}

export type PropertyCompatibleWithEncodedNameParameters =
  PropertyCompatibleWithEncodedNameBodyParam & RequestParameters;

export interface HeaderRequestHeaders {
  "default-name": string;
}

export interface HeaderRequestHeaderParam {
  headers: RawHttpHeadersInput & HeaderRequestHeaders;
}

export type HeaderRequestParameters = HeaderRequestHeaderParam &
  RequestParameters;
export type HeaderResponseParameters = RequestParameters;

export interface ModelClientBodyParam {
  body: ModelWithClientClientName;
}

export type ModelClientParameters = ModelClientBodyParam & RequestParameters;

export interface ModelLanguageBodyParam {
  body: ModelWithLanguageClientName;
}

export type ModelLanguageParameters = ModelLanguageBodyParam &
  RequestParameters;

export interface UnionEnumUnionEnumNameBodyParam {
  body: ServerExtensibleEnum;
}

export type UnionEnumUnionEnumNameParameters = UnionEnumUnionEnumNameBodyParam &
  RequestParameters;

export interface UnionEnumUnionEnumMemberNameBodyParam {
  body: ExtensibleEnum;
}

export type UnionEnumUnionEnumMemberNameParameters =
  UnionEnumUnionEnumMemberNameBodyParam & RequestParameters;
