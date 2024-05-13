// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface NoDecoratorInPublicQueryParamProperties {
  name: string;
}

export interface NoDecoratorInPublicQueryParam {
  queryParameters: NoDecoratorInPublicQueryParamProperties;
}

export type NoDecoratorInPublicParameters = NoDecoratorInPublicQueryParam &
  RequestParameters;

export interface PublicDecoratorInPublicQueryParamProperties {
  name: string;
}

export interface PublicDecoratorInPublicQueryParam {
  queryParameters: PublicDecoratorInPublicQueryParamProperties;
}

export type PublicDecoratorInPublicParameters =
  PublicDecoratorInPublicQueryParam & RequestParameters;

export interface NoDecoratorInInternalQueryParamProperties {
  name: string;
}

export interface NoDecoratorInInternalQueryParam {
  queryParameters: NoDecoratorInInternalQueryParamProperties;
}

export type NoDecoratorInInternalParameters = NoDecoratorInInternalQueryParam &
  RequestParameters;

export interface InternalDecoratorInInternalQueryParamProperties {
  name: string;
}

export interface InternalDecoratorInInternalQueryParam {
  queryParameters: InternalDecoratorInInternalQueryParamProperties;
}

export type InternalDecoratorInInternalParameters =
  InternalDecoratorInInternalQueryParam & RequestParameters;

export interface PublicDecoratorInInternalQueryParamProperties {
  name: string;
}

export interface PublicDecoratorInInternalQueryParam {
  queryParameters: PublicDecoratorInInternalQueryParamProperties;
}

export type PublicDecoratorInInternalParameters =
  PublicDecoratorInInternalQueryParam & RequestParameters;

export interface PublicQueryParamProperties {
  name: string;
}

export interface PublicQueryParam {
  queryParameters: PublicQueryParamProperties;
}

export type PublicParameters = PublicQueryParam & RequestParameters;

export interface InternalQueryParamProperties {
  name: string;
}

export interface InternalQueryParam {
  queryParameters: InternalQueryParamProperties;
}

export type InternalParameters = InternalQueryParam & RequestParameters;

export interface OperationQueryParamProperties {
  name: string;
}

export interface OperationQueryParam {
  queryParameters: OperationQueryParamProperties;
}

export type OperationParameters = OperationQueryParam & RequestParameters;

export interface DiscriminatorQueryParamProperties {
  kind: string;
}

export interface DiscriminatorQueryParam {
  queryParameters: DiscriminatorQueryParamProperties;
}

export type DiscriminatorParameters = DiscriminatorQueryParam &
  RequestParameters;
