// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Extension } from "./models.js";

export interface PutBodyParam {
  body: Extension;
}

export type PutParameters = PutBodyParam & RequestParameters;
export type GetParameters = RequestParameters;
