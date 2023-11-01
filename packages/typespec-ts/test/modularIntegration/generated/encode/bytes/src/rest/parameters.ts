// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "./models.js";

export interface DefaultQueryParamProperties {
  value: string;
}

export interface DefaultQueryParam {
  queryParameters: DefaultQueryParamProperties;
}

export type DefaultParameters = DefaultQueryParam & RequestParameters;

export interface Base64QueryParamProperties {
  value: string;
}

export interface Base64QueryParam {
  queryParameters: Base64QueryParamProperties;
}

export type Base64Parameters = Base64QueryParam & RequestParameters;

export interface Base64urlQueryParamProperties {
  value: string;
}

export interface Base64urlQueryParam {
  queryParameters: Base64urlQueryParamProperties;
}

export type Base64urlParameters = Base64urlQueryParam & RequestParameters;

export interface Base64urlArrayQueryParamProperties {
  value: string[];
}

export interface Base64urlArrayQueryParam {
  queryParameters: Base64urlArrayQueryParamProperties;
}

export type Base64urlArrayParameters = Base64urlArrayQueryParam &
  RequestParameters;

export interface DefaultBodyParam {
  body: DefaultBytesProperty;
}

export type DefaultParameters = DefaultBodyParam & RequestParameters;

export interface Base64BodyParam {
  body: Base64BytesProperty;
}

export type Base64Parameters = Base64BodyParam & RequestParameters;

export interface Base64urlBodyParam {
  body: Base64urlBytesProperty;
}

export type Base64urlParameters = Base64urlBodyParam & RequestParameters;

export interface Base64urlArrayBodyParam {
  body: Base64urlArrayBytesProperty;
}

export type Base64urlArrayParameters = Base64urlArrayBodyParam &
  RequestParameters;

export interface DefaultHeaders {
  value: string;
}

export interface DefaultHeaderParam {
  headers: RawHttpHeadersInput & DefaultHeaders;
}

export type DefaultParameters = DefaultHeaderParam & RequestParameters;

export interface Base64Headers {
  value: string;
}

export interface Base64HeaderParam {
  headers: RawHttpHeadersInput & Base64Headers;
}

export type Base64Parameters = Base64HeaderParam & RequestParameters;

export interface Base64urlHeaders {
  value: string;
}

export interface Base64urlHeaderParam {
  headers: RawHttpHeadersInput & Base64urlHeaders;
}

export type Base64urlParameters = Base64urlHeaderParam & RequestParameters;

export interface Base64urlArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  value: string;
}

export interface Base64urlArrayHeaderParam {
  headers: RawHttpHeadersInput & Base64urlArrayHeaders;
}

export type Base64urlArrayParameters = Base64urlArrayHeaderParam &
  RequestParameters;

export interface DefaultBodyParam {
  body: string;
}

export type DefaultParameters = DefaultBodyParam & RequestParameters;

export interface OctetStreamBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface OctetStreamMediaTypesParam {
  contentType: "application/octet-stream";
}

export type OctetStreamParameters = OctetStreamMediaTypesParam &
  OctetStreamBodyParam &
  RequestParameters;

export interface CustomContentTypeBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface CustomContentTypeMediaTypesParam {
  contentType: "image/png";
}

export type CustomContentTypeParameters = CustomContentTypeMediaTypesParam &
  CustomContentTypeBodyParam &
  RequestParameters;

export interface Base64BodyParam {
  body: string;
}

export type Base64Parameters = Base64BodyParam & RequestParameters;

export interface Base64urlBodyParam {
  body: string;
}

export type Base64urlParameters = Base64urlBodyParam & RequestParameters;
export type DefaultParameters = RequestParameters;
export type OctetStreamParameters = RequestParameters;
export type CustomContentTypeParameters = RequestParameters;
export type Base64Parameters = RequestParameters;
export type Base64urlParameters = RequestParameters;
