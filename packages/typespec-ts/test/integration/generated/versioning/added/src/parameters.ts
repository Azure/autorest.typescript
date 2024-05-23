// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { ModelV1, ModelV2 } from "./models.js";

export interface V1Headers {
  "header-v2": string;
}

export interface V1BodyParam {
  body: ModelV1;
}

export interface V1HeaderParam {
  headers: RawHttpHeadersInput & V1Headers;
}

export type V1Parameters = V1HeaderParam & V1BodyParam & RequestParameters;

export interface V2BodyParam {
  body: ModelV2;
}

export type V2Parameters = V2BodyParam & RequestParameters;

export interface V2InInterfaceBodyParam {
  body: ModelV2;
}

export type V2InInterfaceParameters = V2InInterfaceBodyParam &
  RequestParameters;
