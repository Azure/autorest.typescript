// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BodyParameter } from "./models.js";

export interface SpreadAsRequestBodyBodyParam {
  body?: BodyParameter;
}

export type SpreadAsRequestBodyParameters = SpreadAsRequestBodyBodyParam &
  RequestParameters;

export interface SpreadAsRequestBodyBodyParam {
  body?: { name: string };
}

export type SpreadAsRequestBodyParameters = SpreadAsRequestBodyBodyParam &
  RequestParameters;

export interface SpreadAsRequestParameterHeaders {
  "x-ms-test-header": string;
}

export interface SpreadAsRequestParameterBodyParam {
  body?: { name: string };
}

export interface SpreadAsRequestParameterHeaderParam {
  headers: RawHttpHeadersInput & SpreadAsRequestParameterHeaders;
}

export type SpreadAsRequestParameterParameters =
  SpreadAsRequestParameterHeaderParam &
    SpreadAsRequestParameterBodyParam &
    RequestParameters;

export interface SpreadWithMultipleParametersHeaders {
  "x-ms-test-header": string;
}

export interface SpreadWithMultipleParametersBodyParam {
  body?: {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
    prop5: string;
    prop6: string;
  };
}

export interface SpreadWithMultipleParametersHeaderParam {
  headers: RawHttpHeadersInput & SpreadWithMultipleParametersHeaders;
}

export type SpreadWithMultipleParametersParameters =
  SpreadWithMultipleParametersHeaderParam &
    SpreadWithMultipleParametersBodyParam &
    RequestParameters;
