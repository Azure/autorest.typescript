// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RequestRegisterCC, RequestRegisterVA } from "./models.js";

export interface RequestUnionBodyBodyParam {
  body: RequestRegisterCC | RequestRegisterVA;
}

export type RequestUnionBodyParameters = RequestUnionBodyBodyParam &
  RequestParameters;
export type ResponseUnionBodyParameters = RequestParameters;
