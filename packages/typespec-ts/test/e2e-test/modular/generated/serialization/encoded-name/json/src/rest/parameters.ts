// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { JsonEncodedNameModel } from "./models.js";

export interface SendBodyParam {
  body?: JsonEncodedNameModel;
}

export type SendParameters = SendBodyParam & RequestParameters;
export type GetParameters = RequestParameters;
