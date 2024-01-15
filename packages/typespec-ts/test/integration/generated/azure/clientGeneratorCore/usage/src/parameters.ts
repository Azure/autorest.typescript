// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { InputModel } from "./models";

export interface InputToInputOutputBodyParam {
  body: InputModel;
}

export type InputToInputOutputParameters = InputToInputOutputBodyParam &
  RequestParameters;
export type OutputToInputOutputParameters = RequestParameters;
