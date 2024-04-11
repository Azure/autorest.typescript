// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface StringBodySendAsTextBodyParam {
  body: string;
}

export interface StringBodySendAsTextMediaTypesParam {
  contentType: "text/plain";
}

export type StringBodySendAsTextParameters =
  StringBodySendAsTextMediaTypesParam &
    StringBodySendAsTextBodyParam &
    RequestParameters;
export type StringBodyGetAsTextParameters = RequestParameters;

export interface StringBodySendAsJsonBodyParam {
  body: string;
}

export interface StringBodySendAsJsonMediaTypesParam {
  contentType: "application/json";
}

export type StringBodySendAsJsonParameters =
  StringBodySendAsJsonMediaTypesParam &
    StringBodySendAsJsonBodyParam &
    RequestParameters;
export type StringBodyGetAsJsonParameters = RequestParameters;
