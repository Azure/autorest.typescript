// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import { ResourceOutput } from "./outputModels";

/** The request has succeeded. */
export interface ResponseOpGetBinary200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface ResponseOpGetArray200Response extends HttpResponse {
  status: "200";
  body: Array<ResourceOutput>;
}

export interface ResponseOpCreateWithHeaders201Headers {
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ResponseOpCreateWithHeaders201Response extends HttpResponse {
  status: "201";
  body: ResourceOutput;
  headers: RawHttpHeaders & ResponseOpCreateWithHeaders201Headers;
}

export interface ResponseOpDeleteWithHeaders204Headers {
  "operation-location": string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ResponseOpDeleteWithHeaders204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ResponseOpDeleteWithHeaders204Headers;
}
