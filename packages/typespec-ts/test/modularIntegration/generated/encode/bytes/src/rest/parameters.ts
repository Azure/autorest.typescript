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

export interface QueryDefaultQueryParamProperties {
  value: string;
}

export interface QueryDefaultQueryParam {
  queryParameters: QueryDefaultQueryParamProperties;
}

export type QueryDefaultParameters = QueryDefaultQueryParam & RequestParameters;

export interface QueryBase64QueryParamProperties {
  value: string;
}

export interface QueryBase64QueryParam {
  queryParameters: QueryBase64QueryParamProperties;
}

export type QueryBase64Parameters = QueryBase64QueryParam & RequestParameters;

export interface QueryBase64urlQueryParamProperties {
  value: string;
}

export interface QueryBase64urlQueryParam {
  queryParameters: QueryBase64urlQueryParamProperties;
}

export type QueryBase64urlParameters = QueryBase64urlQueryParam &
  RequestParameters;

export interface QueryBase64urlArrayQueryParamProperties {
  value: string[];
}

export interface QueryBase64urlArrayQueryParam {
  queryParameters: QueryBase64urlArrayQueryParamProperties;
}

export type QueryBase64urlArrayParameters = QueryBase64urlArrayQueryParam &
  RequestParameters;

export interface PropertyDefaultBodyParam {
  body: DefaultBytesProperty;
}

export type PropertyDefaultParameters = PropertyDefaultBodyParam &
  RequestParameters;

export interface PropertyBase64BodyParam {
  body: Base64BytesProperty;
}

export type PropertyBase64Parameters = PropertyBase64BodyParam &
  RequestParameters;

export interface PropertyBase64urlBodyParam {
  body: Base64urlBytesProperty;
}

export type PropertyBase64urlParameters = PropertyBase64urlBodyParam &
  RequestParameters;

export interface PropertyBase64urlArrayBodyParam {
  body: Base64urlArrayBytesProperty;
}

export type PropertyBase64urlArrayParameters = PropertyBase64urlArrayBodyParam &
  RequestParameters;

export interface HeaderDefaultHeaders {
  value: string;
}

export interface HeaderDefaultHeaderParam {
  headers: RawHttpHeadersInput & HeaderDefaultHeaders;
}

export type HeaderDefaultParameters = HeaderDefaultHeaderParam &
  RequestParameters;

export interface HeaderBase64Headers {
  value: string;
}

export interface HeaderBase64HeaderParam {
  headers: RawHttpHeadersInput & HeaderBase64Headers;
}

export type HeaderBase64Parameters = HeaderBase64HeaderParam &
  RequestParameters;

export interface HeaderBase64urlHeaders {
  value: string;
}

export interface HeaderBase64urlHeaderParam {
  headers: RawHttpHeadersInput & HeaderBase64urlHeaders;
}

export type HeaderBase64urlParameters = HeaderBase64urlHeaderParam &
  RequestParameters;

export interface HeaderBase64urlArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  value: string;
}

export interface HeaderBase64urlArrayHeaderParam {
  headers: RawHttpHeadersInput & HeaderBase64urlArrayHeaders;
}

export type HeaderBase64urlArrayParameters = HeaderBase64urlArrayHeaderParam &
  RequestParameters;

export interface RequestBodyDefaultBodyParam {
  body: string;
}

export type RequestBodyDefaultParameters = RequestBodyDefaultBodyParam &
  RequestParameters;

export interface RequestBodyOctetStreamBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface RequestBodyOctetStreamMediaTypesParam {
  contentType: "application/octet-stream";
}

export type RequestBodyOctetStreamParameters =
  RequestBodyOctetStreamMediaTypesParam &
    RequestBodyOctetStreamBodyParam &
    RequestParameters;

export interface RequestBodyCustomContentTypeBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface RequestBodyCustomContentTypeMediaTypesParam {
  contentType: "image/png";
}

export type RequestBodyCustomContentTypeParameters =
  RequestBodyCustomContentTypeMediaTypesParam &
    RequestBodyCustomContentTypeBodyParam &
    RequestParameters;

export interface RequestBodyBase64BodyParam {
  body: string;
}

export type RequestBodyBase64Parameters = RequestBodyBase64BodyParam &
  RequestParameters;

export interface RequestBodyBase64urlBodyParam {
  body: string;
}

export type RequestBodyBase64urlParameters = RequestBodyBase64urlBodyParam &
  RequestParameters;
export type ResponseBodyDefaultParameters = RequestParameters;
export type ResponseBodyOctetStreamParameters = RequestParameters;
export type ResponseBodyCustomContentTypeParameters = RequestParameters;
export type ResponseBodyBase64Parameters = RequestParameters;
export type ResponseBodyBase64urlParameters = RequestParameters;
