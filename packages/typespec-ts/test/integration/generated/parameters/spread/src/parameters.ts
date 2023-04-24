// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BodyParameter } from "./models";

export interface ModelSpreadAsRequestBodyBodyParam {
  body?: BodyParameter;
}

export type ModelSpreadAsRequestBodyParameters =
  ModelSpreadAsRequestBodyBodyParam & RequestParameters;

export interface AliasSpreadAsRequestBodyBodyParam {
  body?: { name: string };
}

export type AliasSpreadAsRequestBodyParameters =
  AliasSpreadAsRequestBodyBodyParam & RequestParameters;

export interface AliasSpreadAsRequestParameterHeaders {
  "x-ms-test-header": string;
}

export interface AliasSpreadAsRequestParameterBodyParam {
  body?: { name: string };
}

export interface AliasSpreadAsRequestParameterHeaderParam {
  headers: RawHttpHeadersInput & AliasSpreadAsRequestParameterHeaders;
}

export type AliasSpreadAsRequestParameterParameters =
  AliasSpreadAsRequestParameterHeaderParam &
    AliasSpreadAsRequestParameterBodyParam &
    RequestParameters;

export interface AliasSpreadWithMultipleParametersHeaders {
  "x-ms-test-header": string;
}

export interface AliasSpreadWithMultipleParametersBodyParam {
  body?: {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
    prop5: string;
    prop6: string;
  };
}

export interface AliasSpreadWithMultipleParametersHeaderParam {
  headers: RawHttpHeadersInput & AliasSpreadWithMultipleParametersHeaders;
}

export type AliasSpreadWithMultipleParametersParameters =
  AliasSpreadWithMultipleParametersHeaderParam &
    AliasSpreadWithMultipleParametersBodyParam &
    RequestParameters;
