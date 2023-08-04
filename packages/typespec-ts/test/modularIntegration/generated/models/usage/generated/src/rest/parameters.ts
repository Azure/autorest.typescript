// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { InputRecord, InputOutputRecord } from "./models.js";

export interface InputBodyParam {
  body: InputRecord;
}

export type InputParameters = InputBodyParam & RequestParameters;
export type OutputParameters = RequestParameters;

export interface InputAndOutputBodyParam {
  body: InputOutputRecord;
}

export type InputAndOutputParameters = InputAndOutputBodyParam &
  RequestParameters;
