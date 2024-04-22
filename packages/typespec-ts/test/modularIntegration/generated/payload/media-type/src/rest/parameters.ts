// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface SendAsTextBodyParam {
  body: string;
}

export interface SendAsTextMediaTypesParam {
  contentType: "text/plain";
}

export type SendAsTextParameters = SendAsTextMediaTypesParam &
  SendAsTextBodyParam &
  RequestParameters;
export type GetAsTextParameters = RequestParameters;

export interface SendAsJsonBodyParam {
  body: string;
}

export interface SendAsJsonMediaTypesParam {
  contentType: "application/json";
}

export type SendAsJsonParameters = SendAsJsonMediaTypesParam &
  SendAsJsonBodyParam &
  RequestParameters;
export type GetAsJsonParameters = RequestParameters;
